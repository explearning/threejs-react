import { Suspense } from 'react'
import BoundingBox from './BoundingBox'
import Model from './Model'
import Dragable from './Dragable'
import * as THREE from 'three';

const Cars = ({ }) => {
    return (
        <Suspense fallback={null} >
            <Dragable transformGroup>
                <BoundingBox
                    position={[4, 4, 0]}
                    dims={[3, 2, 6]}
                    offset={[0, -0.4, 0.8]}
                >
                    <Model
                        path='/tesla_model_3/scene.gltf'
                        scale={new Array(3).fill(0.01)}
                    />
                </BoundingBox>
            </Dragable>
            <Dragable transformGroup>
                <BoundingBox
                    position={[-4, 4, 0]}
                    dims={[3, 2, 7]}
                    offset={[0, -0.8, 0.2]}
                >
                    <Model
                        path='/tesla_model_s/scene.gltf'
                        scale={new Array(3).fill(0.013)}
                    />
                </BoundingBox>
            </Dragable>
            <Dragable transformGroup >
                <Model
                    path='/old_gramophone/scene.gltf'
                    scale={new THREE.Vector3(.05, .05, .05)}
                    position={[0, 0, 3]}
                />
            </Dragable>
            <Dragable transformGroup>
                <BoundingBox
                    dims={[3, 2, 6]}
                >
                    <Model
                        path='/spectral_rubix/scene.gltf'
                        scale={new THREE.Vector3(.3, .3, .3)}
                        position={[0, 1, -5]}
                    />
                </BoundingBox>
            </Dragable>
        </Suspense>
    )
}

export default Cars
