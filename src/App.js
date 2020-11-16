import logo from './logo.svg';
import './App.css';
import * as THREE from 'three';

function App() {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(
    window.innerWidth,
    window.innerHeight
  );
  document.body.innerHTML = '';
  document.body.appendChild(renderer.domElement);

  const geometry = new THREE.BoxGeometry();
  const material = new THREE.MeshBasicMaterial({
    color: 'blue'
  });
  camera.position.z = 5;
  const cube = new THREE.Mesh(geometry,material);
  scene.add(cube);

  function animate() {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene,camera);
  }

  animate();

  window.addEventListener('resize',
    () => {
      renderer.setSize(window.innerWidth, window.innerHeight)
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
    }
  );

  return (
    null
  );
}

export default App;
