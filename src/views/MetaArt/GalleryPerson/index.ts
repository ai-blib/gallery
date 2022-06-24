import 'three-orbitcontrols'
import * as THREE from 'three'
import {FBXLoader} from 'three/examples/jsm/loaders/FBXLoader'
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader'

import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls'
import {FirstPersonControls} from 'three/examples/jsm/controls/FirstPersonControls'
// import {FirstPersonControls} from '@types/three/examples/jsm/controls/FirstPersonControls'
import 'three-orbitcontrols'
import JoyStick from './joystick'
import LoadModelCache from '@/utils/MetaverseModelFun'
import {DRACOLoader} from "three/examples/jsm/loaders/DRACOLoader";

export default class GalleryPerson {
    camera: any = null;
    renderer: any = null;

    scene: any = null;
    controls: any = null;
    pointLight1: any = null;
    pointLight2: any = null;
    pointLight3: any = null;
    pointLight4: any = null;
    pointLight5: any = null;
    pointLight6: any = null;
    pointLight7: any = null;
    ambientLight: any = null;
    player: any = null;
    activeCamera: any = null;
    speed: number = 200 //移动速度
    turnSpeed: number = 6;
    move: any = {
        forward: 0,
        turn: 0,
        x: 0,
        y: 0
    }
    colliders: Array<any> = [] //碰撞物
    joystick: any = null //移动设备控制器
    clock: any = new THREE.Clock();
    children: Array<any> = []; // modal collection
    artBox: Array<any> = [];
    //声明raycaster和mouse变量
    raycaster: any = new THREE.Raycaster();
    mouse: any = new THREE.Vector2();
    sources: Array<any> = [];
    _handleSelected: Function | null = null
    _onComplete: Function | null = null;

    constructor(handleSelected: Function, _onComplete: Function) {
        this.clock = new THREE.Clock();
        this._handleSelected = handleSelected;
        this._onComplete = _onComplete;
        this.createScene()
        this.createObjects()
        // createColliders()
        this.createPlayer()
        this.createCamera()
        this.createLights()
        // this.createLightHelpers()
        this.createControls()
        this.createEvents()
        this.createJoyStick()
        this.render();
        this.addEventListener();

    }

    addEventListener() {
        document.getElementById('three')?.addEventListener('click', this.listenerChildEvent.bind(this), false);
    }

    createJoyStick() {
        this.joystick = new JoyStick({
            onMove: (forward, turn) => {
                turn = -turn
                if (Math.abs(forward) < 0.3) forward = 0
                if (Math.abs(turn) < 0.1) turn = 0
                this.move.forward = forward
                this.move.turn = turn
            }
        })
    }

    createEvents() {
        document.addEventListener('keydown', this.onKeyDown.bind(this))
        document.addEventListener('keyup', this.onKeyUp.bind(this))
    }


    onKeyDown(event) {
        switch (event.code) {
            case 'ArrowUp':
            case 'KeyW':
                this.move.forward = 30
                break

            case 'ArrowLeft':
            case 'KeyA':
                this.move.turn = this.turnSpeed
                break

            case 'ArrowDown':
            case 'KeyS':
                this.move.forward = -30
                break

            case 'ArrowRight':
            case 'KeyD':
                this.move.turn = -this.turnSpeed
                break
            case 'Space':
                break
        }
    }

    onKeyUp(event) {
        switch (event.code) {

            case 'ArrowUp':
            case 'KeyW':
                this.move.forward = 0
                break

            case 'ArrowLeft':
            case 'KeyA':
                this.move.turn = 0
                break

            case 'ArrowDown':
            case 'KeyS':
                this.move.forward = 0
                break

            case 'ArrowRight':
            case 'KeyD':
                this.move.turn = 0
                break

        }
    }

    createPlayer() {
        const geometry = new THREE.BoxGeometry(1, 2, 1)
        const material = new THREE.MeshBasicMaterial({
            color: 0xff0000,
            wireframe: true
        })
        this.player = new THREE.Mesh(geometry, material)
        this.player.name = 'player'
        // geometry.translate(0, 1, 0)
        this.player.position.set(1, 40, 0)
        // this.player.rotateY(90);
        // scene.add(player)
    }

    createCamera() {
        const back = new THREE.Object3D()
        back.position.set(0, -10, 0)
        back.parent = this.player
        //player.add(back)
        this.activeCamera = back
    }

    createScene() {
        this.renderer = new THREE.WebGLRenderer({})
        this.renderer.outputEncoding = THREE.sRGBEncoding
        this.renderer.setSize(window.innerWidth, window.innerHeight)
        this.renderer.setPixelRatio(window.devicePixelRatio)
        // this.renderer.shadowMap.enabled = true
        // this.renderer.shadowMap.type = THREE.PCFSoftShadowMap

        this.camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 9000)
        // this.camera.position.set(1800, 120, 100)
        this.scene = new THREE.Scene()

        document.getElementById('three')?.appendChild(this.renderer.domElement)

        window.addEventListener('resize', this.onResize.bind(this))
    }

    createLights() {
        this.ambientLight = new THREE.AmbientLight(0xe0ffff, 0.9)
        this.scene.add(this.ambientLight)

        this.pointLight1 = new THREE.PointLight(0xe0ffff, 0.1, 20)
        this.pointLight1.position.set(-2, 3, 2)

        this.scene.add(this.pointLight1)

        this.pointLight2 = new THREE.PointLight(0xe0ffff, 0.1, 20)
        this.pointLight2.position.set(0, 3, -6)
        this.scene.add(this.pointLight2)

        this.pointLight3 = new THREE.PointLight(0xe0ffff, 0.1, 20)
        this.pointLight3.position.set(-12, 3, 6)
        this.scene.add(this.pointLight3)

        this.pointLight4 = new THREE.PointLight(0xe0ffff, 0.1, 20)
        this.pointLight4.position.set(-12, 4, -4)
        this.scene.add(this.pointLight4)

        this.pointLight5 = new THREE.PointLight(0xe0ffff, 0.1, 20)
        this.pointLight5.position.set(12, 4, -8)
        this.scene.add(this.pointLight5)

        this.pointLight6 = new THREE.PointLight(0xe0ffff, 0.1, 20)
        this.pointLight6.position.set(12, 4, 0)
        this.scene.add(this.pointLight6)
        this.pointLight7 = new THREE.PointLight(0xe0ffff, 0.1, 20)
        this.pointLight7.position.set(12, 4, 8)
        this.scene.add(this.pointLight7)
    }

    createLightHelpers() {
        for (const i in new Array(6).fill(0)) {
            this.scene.add(new THREE.PointLightHelper(this["pointLight" + i + 1], 1))
        }
    }

    createControls() {
        // @ts-ignore
        this.controls = new OrbitControls(this.camera, this.renderer.domElement);
        this.controls.target.set(0, 0, 0);
        this.controls.enableDamping = true;
        console.log(this.controls, 'update')
    }


    async createObjects() {
        // const loader = new FBXLoader();
        // const {house} = await LoadModelCache.LoaderRemoteModelObj();
        const loader = new GLTFLoader()
        const dracoLoader = new DRACOLoader();
        dracoLoader.setDecoderPath('https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/js/libs/draco/'); // use a full url path
        loader.setDRACOLoader(dracoLoader);
        loader.load('../NFTSHOW_adjust.glb', (gltf) => {
            // @ts-ignore
            gltf.scene.traverse((child) => {
                this.colliders.push(child);
                // @ts-ignore
                if (child.isMesh) {

                    child.receiveShadow = true
                    child.frustumCulled = false
                    //模型阴影
                    child.castShadow = true
                    //模型自发光
                    // @ts-ignore
                    child.material.emissive = child.material.color
                    // @ts-ignore
                    child.material.emissiveMap = child.material.map

                }
                // @ts-ignore
                child.token = null
                if (child.name.includes('Paint')) {
                    this.children.push(child);
                    child.visible = false

                } else if (child.name.includes('pCube')) {
                    child.visible = false
                    this.artBox.push(child)
                }
            })
            // @ts-ignore
            this.scene.add(gltf.scene)
        })

        // this.getHLS('https://etlive-mediapackage-fastly.cbsaavideo.com/dvr/manifest.m3u8',document.querySelector('video'))
        this._onComplete && this._onComplete();

    }


    initFrames(child) {
        child.material = new THREE.MeshBasicMaterial({
            color: 0x7f5816
        })
    }

    initStairs(child) {
        child.material = new THREE.MeshStandardMaterial({
            color: 0xd1cdb7
        })
        // child.material.roughness = 0.5
        // child.material.metalness = 0.6
    }

//  initWalls(child) {
//   child.material = new THREE.MeshStandardMaterial({
//     color: 0xffffff
//   })
//   child.material.roughness = 0.5
//   child.material.metalness = 0.6
// }

    onResize() {
        const w = window.innerWidth
        const h = window.innerHeight
        this.camera.aspect = w / h
        this.camera.updateProjectionMatrix()
        this.renderer.setSize(w, h)
    }

    render() {
        const update = (dt) => {
            this.updatePlayer(dt)
            this.updateCamera(dt)
        }
        const dt = this.clock.getDelta()
        update(dt)
        this.renderer.render(this.scene, this.camera)

        window.requestAnimationFrame(this.render.bind(this))
    }


    updatePlayer(dt) {

        const pos = this.player.position.clone()
        // pos.y += 2
        let dir = new THREE.Vector3()

        this.player.getWorldDirection(dir)
        dir.negate()

        if (this.move.forward < 0) dir.negate()
        let raycaster = new THREE.Raycaster(pos, dir)
        let blocked = false

        if (this.colliders.length > 0) {
            const intersect = raycaster.intersectObjects(this.colliders)
            if (intersect.length > 0) {
                if (intersect[0].distance < 1) {
                    blocked = true
                }
            }
        }

        if (this.colliders.length > 0) {
            //左方向碰撞监测
            dir.set(-1, 0, 0)
            dir.applyMatrix4(this.player.matrix)
            dir.normalize()
            raycaster = new THREE.Raycaster(pos, dir)

            let intersect = raycaster.intersectObjects(this.colliders)
            if (intersect.length > 0) {
                if (intersect[0].distance < 2) {
                    this.player.translateX(2 - intersect[0].distance)
                }
            }

            //右方向碰撞监测
            dir.set(1, 0, 0)
            dir.applyMatrix4(this.player.matrix)
            dir.normalize()
            raycaster = new THREE.Raycaster(pos, dir)

            intersect = raycaster.intersectObjects(this.colliders)
            if (intersect.length > 0) {
                if (intersect[0].distance < 2) {
                    this.player.translateX(intersect[0].distance - 2)
                }
            }
        }

        if (!blocked) {
            if (this.move.forward !== 0) {

                if (this.move.forward > 0) {
                    this.player.translateZ(-dt * this.speed)
                } else {
                    this.player.translateZ(dt * this.speed)
                }
            }
        }

        if (this.move.turn !== 0) {
            this.player.rotateY(this.move.turn * dt)
        }
    }

    updateCamera(dt) {
        //更新摄像机
        this.camera.position.lerp(
            this.activeCamera.getWorldPosition(
                new THREE.Vector3()
            ),
            1
        )
        const pos = this.player.position.clone()
        pos.y += 20
        // console.log(pos,90)
        this.camera.lookAt(pos)
    }

    /**
     *
     */
    hiddenPlayer() {
        const payer = document.getElementById('player');
        if (payer) payer.style.display = 'none';
    }

    updateMaterial(child: any | Object, source: string) {
        const texture = new THREE.TextureLoader().load(source);
        // texture.magFilter = THREE.NearestFilter
        // texture.minFilter = THREE.NearestFilter
        texture.encoding = THREE.sRGBEncoding
        // texture.flipY = false
        // var maxAnisotropy = this.renderer.getMaxAnisotropy();
        // texture.anisotropy=maxAnisotropy;
        child.material = new THREE.MeshStandardMaterial({
            color: new THREE.Color(0xffffff),
            map: texture,
        })
        // child.material.map.matrix.scale(1.2,1.3,1.4)
        child.material.roughness = 0
        child.material.metalness = 0
    }

    listenerChildEvent(event) {
        //通过鼠标点击的位置计算出raycaster所需要的点的位置，以屏幕中心为原点，值的范围为-1到1.
        this.mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
        this.mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

        // 通过鼠标点的位置和当前相机的矩阵计算出raycaster
        this.raycaster.setFromCamera(this.mouse, this.camera);

        // 获取raycaster直线和所有模型相交的数组集合
        const intersects = this.raycaster.intersectObjects(this.scene.children);
        const {tokenInfo, nftIndex} = intersects[0]['object'];

        this._handleSelected && this._handleSelected(nftIndex, tokenInfo);
        // this.move.forward=intersects[0].distance
        // this.player.position.set(18, 20, 100)
        //将所有的相交的模型的颜色设置为红色，如果只需要将第一个触发事件，那就数组的第一个模型改变颜色即可
        // for (var i = 0; i < intersects.length; i++) {
        //     intersects[i].object.material.color.set(0xff0000);
        // }
    }

    createArtExhibition(sources: Array<string>) {
        this.sources = sources;
        for (const index in this.children) {
            const child = this.children[index];
            const source = sources[index] || {};
            const url = source['nftUrl']
            const box = this.artBox[index];
            if (url) {
                child.scale.set(1.6, 1.6, 1.6);
                box.scale.set(1.6, 1.6, 1.6);
                child.visible = true;
                box.visible = true;
                const isChange = !child["tokenInfo"] || url !== child["tokenInfo"]['nftUrl'];
                child.nftIndex = index;  // set index
                box.nftIndex = index;   // set index
                child.tokenInfo = source;
                box.tokenInfo = source;
                if (isChange) {
                    this.updateMaterial(child, url);
                }

                continue;
            }
            child.visible = false;
            box.visible = false;
        }

    }
}
