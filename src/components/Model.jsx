import { useLoader } from 'react-three-fiber';
import { 
    GLTFLoader 
} from 'three/examples/jsm/loaders/GLTFLoader';
import * as THREE from 'three'

const Model = props => {
    const model = useLoader(
        GLTFLoader,
        process.env.PUBLIC_URL + props.path
    )

    model.scene.traverse(child => {
        if (child.isMesh) {
            child.castShadow = true
            child.receiveShadow = true
            child.material.side = THREE.FrontSide
        }
    })

    return (
        <primitive 
            object={model.scene}
            scale={props.scale}
        />
    )
}

export default Model;