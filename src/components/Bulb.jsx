import { useThree } from 'react-three-fiber'
import { useEffect, useRef } from 'react'

const Bulb = props => {
    const { scene } = useThree()
    const ref = useRef()
    const lightRef = useRef()
    useEffect(() => {
        if (scene.lightMeshes) scene.lightMeshes.push(ref)
        else scene.lightMeshes = [ref]
        if (scene.lights) scene.lights.push(lightRef)
        else scene.lights = [lightRef]
    }, [])
    return (
        <mesh {...props} ref={ref}>
            <pointLight 
                ref={lightRef}
                attach='light'
                castShadow
                shadow-mapSize-height={2**10}
                shadow-mapSize-width={2**10}
                shadow-radius={10}
            />
            <sphereBufferGeometry args={[0.2, 20, 20]} />
            <meshPhongMaterial emissive='white' />
        </mesh>
    )
}

export default Bulb;