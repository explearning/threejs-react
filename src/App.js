import './App.css';
import { 
  Canvas
} from 'react-three-fiber';
import { Physics } from 'use-cannon';
import { Suspense } from 'react';
import Orbit from './components/Orbit';
import Box from './components/Box';
import Background from './components/Background';
import Floor from './components/Floor';
import Bulb from './components/Bulb';
import Dragable from './components/Dragable';
import ColorPicker from './components/ColorPicker';
import Model from './components/Model';

function App() {
  return (
    <div style={{height: '100vh', width: '100vw'}}>
      <ColorPicker />
      <Canvas 
        shadowMap
        style={{background: 'black'}} 
        camera={{ position: [7,7,7] }}
      >
        <ambientLight intensity={0.2}/>
        <Orbit />
        <axesHelper args={[5]}/>
        <Physics>
          <Dragable>
            <Bulb position={[0,3,0]}/>
            <Suspense fallback={null} >
              <Model 
                path='/tesla_model_3/scene.gltf'
                scale={new Array(3).fill(0.01)}
                position={[4,0.6,0]}
              />
              <Model 
                path='/tesla_model_s/scene.gltf'
                scale={new Array(3).fill(0.013)}
                position={[-4,0.2,0]}
              />
            </Suspense>
          </Dragable>
          <Suspense fallback={null}>
            <Background />
          </Suspense>
          <Floor position={[0,-0.5,0]}/>
        </Physics>
      </Canvas>
    </div>
  );
}

export default App;
