import logo from './logo.svg';
import './App.css';
import { 
  Canvas, 
  useFrame, 
  useThree, 
  extend,
  useLoader
} from 'react-three-fiber';
import { useRef, Suspense } from 'react';
import { 
  OrbitControls 
} from 'three/examples/jsm/controls/OrbitControls';
import * as THREE from 'three';
extend({ OrbitControls });

const Orbit = () => {
  const { camera, gl } = useThree();
  return (
    <orbitControls args={[camera, gl.domElement]}/>
  )
}

const Box = props => {
  const ref = useRef();
  const texture = useLoader(
    THREE.TextureLoader, 
    '/wood.jpg'
  );
  useFrame(state => {
    ref.current.rotation.y += 0.01;
    ref.current.rotation.x += 0.01;
  });

  const handlePointerDown = e => {
    e.object.active = true;
    if (window.activeMesh) {
      scaleDown(window.activeMesh)
      window.activeMesh.active = false;
    }
    window.activeMesh = e.object
  }

  const handlePointerEnter = e => {
    e.object.scale.x = 1.5
    e.object.scale.y = 1.5
    e.object.scale.z = 1.5
  }

  const handlePointerLeave = e => {
    if (!e.object.active) {
      scaleDown(e.object)
    }
  }

  const scaleDown = object => {
    object.scale.x = 1
    object.scale.y = 1
    object.scale.z = 1
  }
  
  return(
    <mesh 
      ref={ref} 
      {...props} 
      castShadow 
      onPointerDown={handlePointerDown}
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
    >
      <boxBufferGeometry args={[1,1,1]}/>
      <meshPhysicalMaterial 
        map={texture}
      />
    </mesh>
  )
}

const Background = props => {
  const texture = useLoader(
    THREE.TextureLoader, 
    '/autoshop.jpg'
  );

  const { gl } = useThree();

  const formatted = new THREE.WebGLCubeRenderTarget(
    texture.image.height
  ).fromEquirectangularTexture(gl, texture)

  return (
    <primitive 
      attach='background' 
      object={formatted}
    />
  )
}

const Floor = props => {
  return (
    <mesh {...props} receiveShadow>
      <boxBufferGeometry args={[20,1,10]}/>
      <meshPhysicalMaterial />
    </mesh>
  )
}

const Bulb = props => {
  return (
    <mesh {...props}>
      <pointLight castShadow/>
      <sphereBufferGeometry args={[0.2, 20, 20]}/>
      <meshPhongMaterial emissive='yellow'/>
    </mesh>
  )
}

function App() {
  const handleClick = e => {
    if (!window.activeMesh) return;
    window.activeMesh.material.color = new THREE.Color(e.target.style.background)
  }
  return (
    <div style={{height: '100vh', width: '100vw'}}>
      <div style={{position: 'absolute', zIndex: 1}}>
        <div 
          onClick={handleClick}
          style={{
            background:'blue', 
            height: 50, 
            width: 50
          }}
        ></div>
        <div 
          onClick={handleClick}
          style={{
            background:'yellow', 
            height: 50, 
            width: 50
          }}
        ></div>
        <div 
          onClick={handleClick}
          style={{
            background:'white', 
            height: 50, 
            width: 50
          }}
        ></div>
      </div>
      <Canvas 
        shadowMap
        style={{background: 'black'}} 
        camera={{ position: [7,7,7] }}
      >
        <ambientLight intensity={0.2}/>
        <Bulb position={[0,3,0]}/>
        <Orbit />
        <axesHelper args={[5]}/>
        <Suspense fallback={null}>
          <Box position={[-4,1,0]}/>
        </Suspense>
        <Suspense fallback={null}>
          <Box position={[4,1,0]}/>
        </Suspense>
        <Suspense fallback={null}>
          <Background />
        </Suspense>
        <Floor position={[0,-0.5,0]}/>
      </Canvas>
    </div>
  );
}

export default App;
