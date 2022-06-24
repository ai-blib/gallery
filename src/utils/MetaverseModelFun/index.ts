import axios from 'axios';
import JSZip from 'jszip'
import {FBXLoader} from "three/examples/jsm/loaders/FBXLoader";

export default class LoadModelCache {
    public static modelAssets: { model: string } = {model: ''}
    public static Url: string = 'https://nft-ic.oss-cn-shanghai.aliyuncs.com/model.zip';
    public static ModelUrl: {
        house: unknown;
    } = {house: ''};
    public static cacheUlr: Array<string> = ['https://nft-ic.oss-cn-shanghai.aliyuncs.com/House_Dx_Shader_V9.FBX'];

    constructor() {

    }

    static async LoaderRemoteModelObj() {
        if (this.ModelUrl.house) {
            return this.ModelUrl
        }
        for (const _url of this.cacheUlr) {
            if ((_url.toLocaleLowerCase()).includes('fbx')) {
                // @ts-ignore
                this.ModelUrl.house = await this.loaderFbx(_url)
            }

        }
        return this.ModelUrl
    }

    static loaderZipModel() {
        if (this.modelAssets.model) {
            return this.modelAssets.model
        }
        console.time('load');
        return new Promise((resolve, reject) => {
            axios.get(this.Url, {responseType: "arraybuffer"}).then(resp => {
                let files = new window.File([resp.data], 'zipFile', {type: 'zip'})
                const new_zip = new JSZip();
                // 解压缩文件对象
                new_zip.loadAsync(files)
                    .then((result) => {
                        // 压缩包的模型文件列表
                        let fileList = result.files
                        console.timeEnd('load')
                        for (let key in fileList) {
                            if (fileList[key].dir) {
                                continue;
                            }
                            console.log(key, 'key')
                            // @ts-ignore
                            new_zip.file(key).async("arraybuffer").then(content => {
                                // Blob构造文件地址，通过url加载模型
                                let blob = new Blob([content]);
                                let modelUrl = window.URL.createObjectURL(blob);
                                if (key.includes('House_Dx_Shader_V9')) {
                                    this.modelAssets.model = modelUrl;
                                }
                                resolve(modelUrl)
                            })
                        }
                    });
            })
        })
    }

    static loaderFbx(url) {
        return new Promise((resolve, reject) => {
            const loader = new FBXLoader();
            loader.load(url as string, (object) => {
                resolve(object)
            })
        })

    }
}
