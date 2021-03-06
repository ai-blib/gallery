import 'three-orbitcontrols'
import * as THREE from 'three'
import {FBXLoader} from 'three/examples/jsm/loaders/FBXLoader'
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader'
import {DRACOLoader} from 'three/examples/jsm/loaders/DRACOLoader'
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls'
import { Reflector } from 'three/examples/jsm/objects/Reflector.js';

import {FirstPersonControls} from 'three/examples/jsm/controls/FirstPersonControls'
// import {FirstPersonControls} from '@types/three/examples/jsm/controls/FirstPersonControls'
import 'three-orbitcontrols'
import {JoyStick} from './toon3d'
import { Mesh, PerspectiveCamera, Scene, WebGLRenderer, AmbientLight, AxesHelper,  MeshBasicMaterial,  Color,   PlaneBufferGeometry,  FontLoader, TextGeometry } from 'three';

export default class Game {
    constructor(nft_urls) {
        //WebGL Kontrolü gerçekleştiriyoruz.
        // if (!Detector.webgl) {
        //     Detector.addGetWebGLMessage();
        // }

        this.nft_urls = [];
        //Constructor tarafından nft url listesi gelirse onları kullan
        if (nft_urls && Array.isArray(nft_urls) && nft_urls.length > 0) {
            this.nft_urls = nft_urls;
        } else {
            this.nft_urls = [
                "https://lh3.googleusercontent.com/cK0w9r2irX2yqYeGs9A8OXctYnnHWtNj64MWepVOZ8MMYC6weWgm3EDS08Qbn6SH-sCSuYLUPItla8GypJ5VpFZayVFCyPUSHG8VyQ=s0",
                "https://lh3.googleusercontent.com/POesFfbLX3KLQVs6ezfRM8AlQzZLlF9rvmdR5FURUt5IsBCwpw_LN6lqoeUrIoVI5dVDjpviUdDgLsmz7oOph7vB3pxpX1aJytLI=w600",
                "https://lh3.googleusercontent.com/mB8GEPDGpiQ-95KlN3vinfwZi-5PWux_KypDP0iqvaHznsVMdxtw83txE99yU1wfWqEsJ_fpFcFzvR_3WHsjytEMTx8a0ZQret-HkAk=w600",
                "https://lh3.googleusercontent.com/iQpf_Q3NgdG8WRamqYxcXmMQMFUAb1q7VhAoq-0jRNTEksV63qa_Xzl3HOyGml1fToI0DFutaoi98fu56ioFtf2JZFPPDsmk5RcTAFo=w600",
                "https://lh3.googleusercontent.com/lzSuK-eerb8HzmIyynjouf44IjK_-MtCv899Q0uYwfiHBq690U3LdFH4Tu5W-Ka1hOt8Vxca7BS0F-RRE4UfZzXXXGO0J-vh9SPsbg=w600"
            ]
        }


        this.container;
        this.player = {};
        this.animations = {};
        this.camera;
        this.scene;
        this.renderer;
        this.controls;
        this.colliders = [];

        //Uygulama için alan oluşturuluyor
        this.container = document.getElementById('three');
        this.container.style.height = '100%'

        const game = this;
        //Animasyon listesi. assets/fbx/anims içersinde bulunmalılar.
        this.anims = ['Walking', 'Walking Backwards', 'Turn', 'Running', 'Pointing Gesture'];

        this.assetsPath = '../';

        this.clock = new THREE.Clock();
        this.init();

        //herhangi bir hata durumuna consola erroru basalım
        window.onError = function (error) {
            console.error(JSON.stringify(error));
        }
    }

    createLights() {
        const group = new THREE.Group();
        this.ambientLight = new THREE.AmbientLight(0xffffff, 1.2)
        this.ambientLight.intensity =0.1;
        this.scene.add(this.ambientLight)
        const SpotLight1 = new THREE.SpotLight(0xffffff);
        SpotLight1.castShadow = true;
        SpotLight1.shadow.mapSize.set(2048, 2048);
        SpotLight1.shadow.bias = -0.000001;
        SpotLight1.intensity = 10;
        SpotLight1.angle = 0.1;
        SpotLight1.position.set(-200, 220, -100);
        group.add(SpotLight1);
        const SpotLight2 = new THREE.SpotLight(0xffffff);
        SpotLight2.castShadow = true;
        SpotLight2.shadow.mapSize.set(50, 50);
        SpotLight2.shadow.bias = -0.000001;
        SpotLight2.intensity = 1;
        SpotLight2.angle = 0.1;
        SpotLight2.position.set(-250, 120, -200);

        group.add(SpotLight2)
        const SpotLight3 = new THREE.SpotLight(0xffffff);
        SpotLight3.castShadow = true;
        SpotLight3.shadow.mapSize.set(50, 50);
        SpotLight3.shadow.bias = -0.000001;
        SpotLight3.intensity = 1;
        SpotLight3.angle = 0.1;
        SpotLight3.position.set(250, 120, 200);
        group.add(SpotLight3)
        group.position.set(0, -1, 0)

        this.scene.add(group)
    }

    async init() {

        this.camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 40000);
        this.camera.position.set(10, 100, 100);

        this.scene = new THREE.Scene();
        this.scene.background = new THREE.Color(0xa0a0a0);
        // this.scene.fog = new THREE.Fog(0xa0a0a0, 1000, 5000);

        let light = new THREE.HemisphereLight(0xffffff, 0x444444);
        light.position.set(0, 200, 0);
        this.scene.add(light);

        const shadowSize = 100;
        light = new THREE.DirectionalLight(0xffffff);
        light.position.set(0, 200, 100);
        light.castShadow = true;
        light.shadow.camera.top = shadowSize;
        light.shadow.camera.bottom = -shadowSize;
        light.shadow.camera.left = -shadowSize;
        light.shadow.camera.right = shadowSize;
        this.scene.add(light);
        this.sun = light;
        // this.createLights();
        this.refect();
        // // yer
        // var mesh = new THREE.Mesh(new THREE.PlaneBufferGeometry(10000, 10000), new THREE.MeshPhongMaterial({
        //     color: 0x999999,
        //     depthWrite: false
        // }));
        // mesh.rotation.x = -Math.PI / 2;
        // mesh.receiveShadow = true;
        // this.scene.add(mesh);
        //
        // var grid = new THREE.GridHelper(5000, 40, 0x000000, 0x000000);
        // grid.material.opacity = 0.2;
        // grid.material.transparent = true;
        // this.scene.add(grid);

        // model
        const loader = new FBXLoader();
        const game = this;
        // //Modeli yükleyelim
        await this.loadGallery()
        loader.load(`${this.assetsPath}fbx/people/Punk.fbx`, function (object) {
            object.scale.set(0.4, 0.4, 0.4)
            object.mixer = new THREE.AnimationMixer(object);
            game.player.mixer = object.mixer;
            game.player.root = object.mixer.getRoot();

            object.name = "User";

            object.traverse(function (child) {
                if (child.isMesh) {
                    child.castShadow = true;
                    child.receiveShadow = false;
                }
            });

            let punks = [
                "SimplePeople_Punk_Black.png",
                "SimplePeople_Punk_Brown.png",
                "SimplePeople_Punk_White.png"
            ]

            //Modele uyumlu olan texture giyilmesini sağlıyoruz
            const tLoader = new THREE.TextureLoader();
            tLoader.load(`${game.assetsPath}images/${punks[Math.floor((Math.random() * punks.length))]}`, function (texture) {
                object.traverse(function (child) {
                    if (child.isMesh) {
                        child.material.map = texture;
                    }
                });
            });

            game.player.object = new THREE.Object3D();
            game.scene.add(game.player.object);
            game.player.object.add(object);
            game.animations.Idle = object.animations[0];

            game.loadNextAnim(loader);
        });

        this.renderer = new THREE.WebGLRenderer({antialias: true});
        this.renderer.setPixelRatio(window.devicePixelRatio);
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.shadowMap.enabled = true;
        this.renderer.toneMapping = THREE.ACESFilmicToneMapping
        // this.renderer.toneMappingExposure = 1
        this.renderer.outputEncoding = THREE.sRGBEncoding
        this.container.appendChild(this.renderer.domElement);
        this.createControls();

        window.addEventListener('resize', function () {
            game.onWindowResize();
        }, false);
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
    refect(){
        // 平面
        this.planeGeometry = new PlaneBufferGeometry(16000, 14000);
        const mirror = new Reflector(this.planeGeometry, {
            clipBias: 0,
            textureWidth: window.innerWidth * window.devicePixelRatio,
            textureHeight: window.innerHeight * window.devicePixelRatio,
            color: new Color(0x889999),
        });
        mirror.position.set(-500, 30, -1000)
        mirror.rotation.x = -0.5*Math.PI;
        // this.scene.add(mirror);
    }
    createControls() {
        this.controls = new OrbitControls(this.camera, this.renderer.domElement)
        this.controls.listenToKeyEvents(window); // optional

        //controls.addEventListener( 'change', render ); // call this only in static scenes (i.e., if there is no animation loop)

        this.controls.enableDamping = false; // an animation loop is required when either damping or auto-rotation are enabled
        this.controls.dampingFactor = false;
        this.controls.panSpeed = 100
        this.controls.screenSpacePanning = false;
        this.controls.maxPolarAngle = Math.PI / 2;
    }

    loadGallery() {
        return new Promise((resolve, reject) => {
            const loader = new GLTFLoader()
            const dracoLoader = new DRACOLoader();
            dracoLoader.setDecoderPath('https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/js/libs/draco/'); // use a full url path
            loader.setDRACOLoader(dracoLoader);
            loader.load('https://nft-ic.oss-cn-shanghai.aliyuncs.com/cyberscene02220621_2052_autosave.glb', (gltf) => {
                gltf.scene.scale.set(50, 50, 50)
                gltf.scene.traverse((child) => {
                    this.colliders.push(child);
                    // @ts-ignore
                    if (child.isMesh) {
                        child.frustumCulled = false;
                        child.receiveShadow = true;
                        // @ts-ignore
                        child.material.envMapIntensity = 0.3;                        //模型阴影
                        child.castShadow = true;
                        // @ts-ignore
                        //模型自发光
                        child.material.emissive = child.material.color;
                        // @ts-ignore
                        child.material.emissiveMap = child.material.map;
                    }
                })
                this.scene.add(gltf.scene)
                return resolve(true)

            })
        })
    }

    loadNextAnim(loader) {
        let anim = this.anims.pop();
        const game = this;
        loader.load(`${this.assetsPath}fbx/anims/${anim}.fbx`, function (object) {
            game.animations[anim] = object.animations[0];
            if (game.anims.length > 0) {
                game.loadNextAnim(loader);
            } else {
                game.createCameras();
                // game.createColliders();
                game.joystick = new JoyStick({
                    onMove: game.playerControl,
                    game: game
                });
                delete game.anims;
                game.action = "Idle";
                game.animate();
            }
        });
    }

    createColliders() {
        THREE.ImageUtils.crossOrigin = '';
        const geometry = new THREE.BoxGeometry(500, 400, 500);


        for (let x = -5000; x < 5000; x += 1000) {
            for (let z = -5000; z < 5000; z += 1000) {
                if (x == 0 && z == 0) {
                    continue
                }
                ;
                //nft url listesinden random şekilde resimi secip kutuları kaplıyoruz
                const mapOverlay = THREE.ImageUtils.loadTexture(this.nft_urls[Math.floor(Math.random() * this.nft_urls.length)]);
                const material = new THREE.MeshBasicMaterial({color: 0xffffff, wireframe: false, map: mapOverlay});
                const box = new THREE.Mesh(geometry, material);
                box.position.set(x, 250, z);
                this.scene.add(box);
                this.colliders.push(box);
            }
        }

        //Başlangıç alanı için bir geometrik cisim oluşturuyoruz. Start here resmiyle kaplıyoruz.
        const start_geometry = new THREE.BoxGeometry(1000, 40, 1000);
        const start_image = THREE.ImageUtils.loadTexture('./assets/images/start_here.png');
        const start_material = new THREE.MeshBasicMaterial({color: 0xffffff, wireframe: false, map: start_image});
        const stage = new THREE.Mesh(start_geometry, start_material);
        stage.position.set(0, 20, 0);
        this.colliders.push(stage);
        this.scene.add(stage);
    }

    movePlayer(dt) {
        const pos = this.player.object.position.clone();
        // pos.y += 60;
        let dir = new THREE.Vector3();
        this.player.object.getWorldDirection(dir);
        if (this.player.move.forward < 0) dir.negate();
        let raycaster = new THREE.Raycaster(pos, dir);
        let blocked = false;
        const colliders = this.colliders;

        if (colliders !== undefined) {
            const intersect = raycaster.intersectObjects(colliders);
            if (intersect.length > 0) {
                if (intersect[0].distance < 50) blocked = true;
            }
        }

        if (!blocked) {
            if (this.player.move.forward > 0) {
                const speed = (this.player.action == 'Running') ? 400 : 150;
                this.player.object.translateZ(dt * speed);
            } else {
                this.player.object.translateZ(-dt * 30);
            }
        }

        if (colliders !== undefined) {
            //cast left
            dir.set(-1, 0, 0);
            dir.applyMatrix4(this.player.object.matrix);
            dir.normalize();
            raycaster = new THREE.Raycaster(pos, dir);

            let intersect = raycaster.intersectObjects(colliders);
            if (intersect.length > 0) {
                if (intersect[0].distance < 50) this.player.object.translateX(100 - intersect[0].distance);
            }

            //cast right
            dir.set(1, 0, 0);
            dir.applyMatrix4(this.player.object.matrix);
            dir.normalize();
            raycaster = new THREE.Raycaster(pos, dir);

            intersect = raycaster.intersectObjects(colliders);
            if (intersect.length > 0) {
                if (intersect[0].distance < 50) this.player.object.translateX(intersect[0].distance - 100);
            }

            //cast down
            dir.set(0, -1, 0);
            pos.y += 20;
            raycaster = new THREE.Raycaster(pos, dir);
            const gravity = 30;

            intersect = raycaster.intersectObjects(colliders);
            if (intersect.length > 0) {
                const targetY = pos.y - intersect[0].distance;
                if (targetY > this.player.object.position.y) {
                    //Going up
                    this.player.object.position.y = 0.8 * this.player.object.position.y + 0.2 * targetY;
                    this.player.velocityY = 0;
                } else if (targetY < this.player.object.position.y) {
                    //Falling
                    if (this.player.velocityY == undefined) this.player.velocityY = 0;
                    this.player.velocityY += dt * gravity;
                    this.player.object.position.y -= this.player.velocityY;
                    if (this.player.object.position.y < targetY) {
                        this.player.velocityY = 0;
                        this.player.object.position.y = targetY;
                    }
                }
            } else if (this.player.object.position.y > 0) {
                if (this.player.velocityY == undefined) this.player.velocityY = 0;
                this.player.velocityY += dt * gravity;
                this.player.object.position.y -= this.player.velocityY;
                if (this.player.object.position.y < 0) {
                    this.player.velocityY = 0;
                    this.player.object.position.y = 0;
                }
            }
        }

        this.player.object.rotateY(this.player.move.turn * dt);
    }

    onWindowResize() {
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();

        this.renderer.setSize(window.innerWidth, window.innerHeight);

    }

    set action(name) {
        const action = this.player.mixer.clipAction(this.animations[name]);
        action.time = 0;
        this.player.mixer.stopAllAction();
        this.player.action = name;
        this.player.actionTime = Date.now();
        this.player.actionName = name;

        action.fadeIn(0.5);
        action.play();
    }

    get action() {
        if (this.player === undefined || this.player.actionName === undefined) return "";
        return this.player.actionName;
    }

    playerControl(forward, turn) {
        turn = -turn;

        if (forward > 0.3) {
            if (this.player.action != 'Walking' && this.player.action != 'Running') this.action = 'Walking';
        } else if (forward < -0.3) {
            if (this.player.action != 'Walking Backwards') this.action = 'Walking Backwards';
        } else {
            forward = 0;
            if (Math.abs(turn) > 0.1) {
                if (this.player.action != 'Turn') this.action = 'Turn';
            } else if (this.player.action != "Idle") {
                this.action = 'Idle';
            }
        }

        if (forward == 0 && turn == 0) {
            delete this.player.move;
        } else {
            this.player.move = {forward, turn};
        }
    }

    set activeCamera(object) {
        this.player.cameras.active = object;
    }

    createCameras() {
        const offset = new THREE.Vector3(0, 80, 0);
        const front = new THREE.Object3D();
        front.position.set(0, 0, 0);
        front.parent = this.player.object;
        const back = new THREE.Object3D();
        back.position.set(10, 100, -560);
        back.parent = this.player.object;
        const wide = new THREE.Object3D();
        wide.position.set(0, 0, 0);
        wide.parent = this.player.object;
        const overhead = new THREE.Object3D();
        overhead.position.set(0, 0, 0);
        overhead.parent = this.player.object;
        const collect = new THREE.Object3D();
        collect.position.set(0, 0, 0);
        collect.parent = this.player.object;
        this.player.cameras = {front, back, wide, overhead, collect};
        this.activeCamera = this.player.cameras.back;

    }

    animate() {
        const game = this;
        const dt = this.clock.getDelta();
        this.controls.update() // required if damping enabled
        requestAnimationFrame(function () {
            game.animate();
        });

        if (this.player.mixer !== undefined) this.player.mixer.update(dt);

        if (this.player.action == 'Walking') {
            const elapsedTime = Date.now() - this.player.actionTime;
            if (elapsedTime > 1000 && this.player.move.forward > 0) {
                this.action = 'Running';
            }
        }

        if (this.player.move !== undefined) this.movePlayer(dt);

        if (this.player.cameras != undefined && this.player.cameras.active != undefined) {
            this.camera.position.lerp(this.player.cameras.active.getWorldPosition(new THREE.Vector3()), 0.05);
            const pos = this.player.object.position.clone();
            // pos.y += 200;
            this.camera.lookAt(pos);
        }

        if (this.sun != undefined) {
            this.sun.position.x = this.player.object.position.x;
            this.sun.position.y = this.player.object.position.y + 200;
            this.sun.position.z = this.player.object.position.z + 100;
            this.sun.target = this.player.object;
        }
        this.renderer.render(this.scene, this.camera);
    }
}
