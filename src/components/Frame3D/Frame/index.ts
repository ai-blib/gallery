import 'three-orbitcontrols'
import * as THREE from 'three'
import {FBXLoader} from 'three/examples/jsm/loaders/FBXLoader'
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader'

import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls'
import {FirstPersonControls} from 'three/examples/jsm/controls/FirstPersonControls'
import 'three-orbitcontrols'
import {RGBELoader} from 'three/examples/jsm/loaders/RGBELoader'

const clock = new THREE.Clock()
const params = {
    exposure: 0.8,
    toneMapping: 'ACESFilmic'
};
// @ts-ignore
const toneMappingOptions = {
    None: THREE.NoToneMapping,
    Linear: THREE.LinearToneMapping,
    Reinhard: THREE.ReinhardToneMapping,
    Cineon: THREE.CineonToneMapping,
    ACESFilmic: THREE.ACESFilmicToneMapping,
};
export default class Frame {
    scene: any = null;
    camera: any = null;
    renderer: any = null;
    container: any = null;
    collection: Array<any> = [];
    _loaded: boolean = false;
    _onComplete: Function | null = null

    constructor() {
        this.init();
    }

    init() {
        this.createScene();
        this.createModel();
        this.createRender();
        this.animate();
        window.addEventListener('resize', this.onWindowResize.bind(this))

    }

    createScene() {
        this.container = document.getElementById('frame')
        this.camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 2000)
        this.camera.position.set(-1025, 325, 2.7);

        this.scene = new THREE.Scene()
    }

    createModel() {
        this.collection = [];
        new RGBELoader()
            .setPath('../models/')
            .load('venice_sunset_1k.hdr', (texture) => {
                texture.mapping = THREE.EquirectangularReflectionMapping;
                this.scene.background = texture;
                this.scene.environment = texture;
                // model
                const loader = new FBXLoader()
                loader.load('../models/3d-model.fbx', (object) => {

                    object.traverse((child) => {
                        // @ts-ignore
                        if (child.isMesh) {
                            // initWalls(child)
                            console.log(child, '12')
                            child.castShadow = true;
                            child.receiveShadow = true;
                            child.frustumCulled = false;
                            //模型阴影
                            child.castShadow = true;
                            //模型自发光
                            // @ts-ignore
                            child.material.emissive = child.material.color;
                            // @ts-ignore
                            child.material.emissiveMap = child.material.map;
                            this.collection.push(child)
                            // if (child.name ==='平面'){
                            //     initWalls(child)
                            // }
                        }

                    })
                    object.rotation.y = -89.3;
                    object.position.set(0, -100, -100)
                    object.scale.set(0.5, 0.5, 0.5)
                    this.scene.add(object)

                }, (e) => {
                    if ((e.loaded / e.total) * 100 === 100) {
                        this._loaded = true
                        this._onComplete && this._onComplete(true);
                    }
                })
            })
    }

    awaitLoaded() {
        return new Promise((resolve, reject) => {
            if (this._loaded) {
                return resolve(true)
            }
            this._onComplete = resolve
        })
    }

    async setFrame(url: string) {
        await this.awaitLoaded();
        const child = this.collection.find((child) => child.name === '平面');
        const texture = new THREE.TextureLoader().load(url)
        texture.encoding = THREE.sRGBEncoding
        // texture.flipY = false
        child.material = new THREE.MeshStandardMaterial({
            map: texture
        })
    }

    createRender() {
        this.renderer = new THREE.WebGLRenderer({antialias: true})
        this.renderer.setPixelRatio(window.devicePixelRatio)
        this.renderer.setSize(window.innerWidth, window.innerHeight)
        this.renderer.shadowMap.enabled = true
        this.renderer.shadowMap.enabled = true
        // this.renderer.toneMapping = toneMappingOptions[params.toneMapping];
        // this.renderer.toneMappingExposure = params.exposure;
        THREE.ShaderChunk.tonemapping_pars_fragment = THREE.ShaderChunk.tonemapping_pars_fragment.replace(
            'vec3 CustomToneMapping( vec3 color ) { return color; }',
            `#define Uncharted2Helper( x ) max( ( ( x * ( 0.15 * x + 0.10 * 0.50 ) + 0.20 * 0.02 ) / ( x * ( 0.15 * x + 0.50 ) + 0.20 * 0.30 ) ) - 0.02 / 0.30, vec3( 0.0 ) )
					float toneMappingWhitePoint = 1.0;
					vec3 CustomToneMapping( vec3 color ) {
						color *= toneMappingExposure;
						return saturate( Uncharted2Helper( color ) / Uncharted2Helper( vec3( toneMappingWhitePoint ) ) );
					}`
        );
        this.renderer.outputEncoding = THREE.sRGBEncoding;
        this.container.appendChild(this.renderer.domElement)

        const hemiLight = new THREE.HemisphereLight(0xffffff, 0x444444)
        hemiLight.position.set(0, 100, 0)
        this.scene.add(hemiLight)

        const controls = new OrbitControls(this.camera, this.renderer.domElement)
        controls.target.set(0, 100, 0)
        controls.update()
    }

    onWindowResize() {

        this.camera.aspect = window.innerWidth / window.innerHeight
        this.camera.updateProjectionMatrix()
        this.renderer.setSize(window.innerWidth, window.innerHeight)

    }

    animate() {

        requestAnimationFrame(this.animate.bind(this))

        const delta = clock.getDelta()
        // if (this.mixer) this.mixer.update(delta)
        this.renderer.render(this.scene, this.camera)
        // stats.update()

    }

}
