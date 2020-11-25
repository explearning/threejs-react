import * as THREE from 'three';

const ColorPicker = props => {
    const handleClick = e => {
        if (!window.activeMesh) return;
        window.activeMesh.material.color = new THREE.Color(e.target.style.background)
    }
    return (
        <div style={{ position: 'absolute', zIndex: 1 }}>
            <div
                onClick={handleClick}
                style={{
                    background: 'blue',
                    height: 50,
                    width: 50
                }}
            ></div>
            <div
                onClick={handleClick}
                style={{
                    background: 'yellow',
                    height: 50,
                    width: 50
                }}
            ></div>
            <div
                onClick={handleClick}
                style={{
                    background: 'white',
                    height: 50,
                    width: 50
                }}
            ></div>
        </div>
    )
}

export default ColorPicker;