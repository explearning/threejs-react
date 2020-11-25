const Bulb = props => {
    return (
        <mesh {...props}>
            <pointLight castShadow />
            <sphereBufferGeometry args={[0.2, 20, 20]} />
            <meshPhongMaterial emissive='yellow' />
        </mesh>
    )
}

export default Bulb;