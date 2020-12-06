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
import ColorPicker from './components/ColorPicker';
import Cars from './components/Cars'
import CameraControls from './components/CameraControls'
import CameraButtons from './components/CameraButtons'
import Lights from './components/Lights'
import { 
  EffectComposer, 
  DepthOfField,
  Bloom
} from 'react-postprocessing'
import state from './state'

function App() {
  return (
    <div style={{height: '100vh', width: '100vw'}}>
      <ColorPicker />
      <CameraButtons />
      <Canvas 
        shadowMap
        style={{background: 'black'}} 
        camera={{ position: [7,7,7] }}
      >
        <Suspense fallback={null}>
          <Background />
        </Suspense>
        <CameraControls />
        <Lights/>
        <Orbit />
        <Physics>
          <Cars />
          <Floor position={[0,-0.5,0]}/>
        </Physics>
        <EffectComposer>
          <DepthOfField 
            focusDistance={0} 
            focalLength={0.02} 
            bokehScale={2} 
            height={480}
          />
          <Bloom 
            luminanceThreshold={1} 
            luminanceSmoothing={0.9} 
            height={300}
          />
        </EffectComposer>
      </Canvas>
    </div>
  );
}

export default App;
