import { useLoader, useThree } from 'react-three-fiber';
import * as THREE from 'three';
import { useMemo } from 'react';

const Background = props => {
    const texture = useLoader(
        THREE.TextureLoader,
        process.env.PUBLIC_URL + '/modern-background-gray.jpeg'
    );

    const { gl } = useThree();
    const formatted = useMemo(() =>
        new THREE.WebGLCubeRenderTarget(
                texture.image.height
        ).fromEquirectangularTexture(gl, texture)
    ,[gl, texture])

    return (
        <primitive
            attach='background'
            object={formatted}
        />
    )
}

export default Background;
