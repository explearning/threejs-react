import { 
    DragControls 
} from 'three/examples/jsm/controls/DragControls';
import { useRef, useEffect, useState } from 'react';
import { useThree, extend } from 'react-three-fiber';
extend ({ DragControls });

const Dragable = props => {
    const groupRef = useRef();
    const controlsRef = useRef();
    const [children, setChildren] = useState([])
    const { camera, gl, scene } = useThree();

    useEffect(() => {
        setChildren(groupRef.current.children)
    },[])
    
    useEffect(() => {
        controlsRef.current.addEventListener(
            'hoveron',
            e => scene.orbitControls.enabled = false
        )
        controlsRef.current.addEventListener(
            'hoveroff',
            e => scene.orbitControls.enabled = true
        )
    },[children])

    return (
        <group ref={groupRef}>
            <dragControls 
                ref={controlsRef}
                args={[children,camera, gl.domElement]}
            />
            {props.children}
        </group>
    )
}

export default Dragable;