import logo from './logo.svg';
import './App.css';
import { Canvas, useFrame } from 'react-three-fiber';
import { useRef } from 'react';

const Box = () => {
  const ref = useRef();
  useFrame(state => {
    ref.current.rotation.x += 0.01;
    ref.current.rotation.y += 0.01;
  });
  
  return(
    <mesh ref={ref}>
      <boxBufferGeometry />
      <meshBasicMaterial color='blue' />
    </mesh>
  )
}

function App() {
  return (
    <div style={{height: '100vh', width: '100vw'}}>
      <Canvas style={{background: 'black'}}>
        <Box/>
      </Canvas>
    </div>
  );
}

export default App;
