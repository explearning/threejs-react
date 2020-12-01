import { useLoader } from 'react-three-fiber';
import { 
    GLTFLoader 
} from 'three/examples/jsm/loaders/GLTFLoader';

const Model = props => {
    const model = useLoader(
        GLTFLoader,
        props.path
    )
    console.log(model)
    return (
        <primitive 
            object={model.scene}
            scale={props.scale}
        />
    )
}

export default Model;