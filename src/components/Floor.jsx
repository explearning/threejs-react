import { useBox } from 'use-cannon';

const Floor = props => {
    const [ref, api] = useBox(() => ({args: [20,1,10], ...props}))
    return (
        <mesh ref={ref} {...props} receiveShadow>
            <boxBufferGeometry args={[20, 1, 10]} />
            <meshPhysicalMaterial />
        </mesh>
    )
}

export default Floor;