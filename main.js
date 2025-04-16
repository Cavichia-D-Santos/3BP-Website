import './src/index.css';
import * as three from 'three';

const cena = new three.Scene();
const camera = new three.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new three.WebGLRenderer({
    canvas: document.querySelector('#trisols'),
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);

const figura = new three.SphereGeometry(10, 20, 10, 100);
const material = new three.MeshBasicMaterial({color: 0xFF6347, wireframe: true});
const esfera = new three.Mesh(figura, material);

cena.add(esfera);

function animate(){
    requestAnimationFrame(animate);

    esfera.rotation.y += 0.001;

    renderer.render(cena, camera);
}

animate();