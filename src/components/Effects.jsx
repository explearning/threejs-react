import { GodRays, EffectComposer, DepthOfField, Bloom, SelectiveBloom } from 'react-postprocessing'
import { useThree } from 'react-three-fiber'
import { useEffect, useState } from 'react'

const Effects = () => {
    const { scene } = useThree()
    console.log(useThree().gl)
    const [lights, setLights] = useState([])
    const [meshes, setMeshes] = useState([])
    useEffect(() => {
        console.log(scene.lightMeshes)
        setLights(scene.lights)
        setMeshes(scene.lightMeshes)
    }, [scene.lights, scene.lightMeshes])

    return (
        meshes && meshes.length === 3 &&
            <EffectComposer>
                {/* <DepthOfField
                    focusDistance={0}
                    focalLength={0.02}
                    bokehScale={2}
                    height={480}
                /> */}
                {/* <Bloom
                    luminanceThreshold={0}
                    luminanceSmoothing={0.9}
                    height={300}
                /> */}
                {meshes.map(light => 
                    <GodRays sun={light.current}/>
                )}
            {/* <SelectiveBloom luminanceThreshold={0} luminanceSmoothing={0.9} height={300} lights={[lights[0]]} selection={meshes}/> */}
            </EffectComposer>
        || null
    )
}

export default Effects