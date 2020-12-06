import state from '../state'

const style = {
    zIndex: 1,
    position: 'absolute',
    bottom: '30vh',
    // left: '40vw',
    height: '30px',
    width: '30px',
    background: 'white',
    textAlign: 'center',
    borderRadius: '100%',
    fontSize: 20,
    fontWeight: 'bold',
    opacity: 0.7,
    border: '1px solid black',
    cursor: 'pointer'
}

const CameraButtons = ({}) => {

    const sets = {
        // model_3
        1: {
            cameraPos: [9,2,4],
            target: [4,0,0],
            name: "Capot001_CAR_PAINT_0"
        },
        // model_s
        2: {
            cameraPos: [1,2,5],
            target: [-4,0,0],
            name: "object005_bod_0"
        }
    }

    const handleClick = num => {
        state.cameraPos.set(...sets[num].cameraPos)
        state.target.set(...sets[num].target)
        state.activeMeshName = sets[num].name
        state.shouldUpdate = true
    }
    return (
        <> 
            <button
                onClick={e => handleClick(2)}
                style={{
                    left: '40vw',
                    ...style
                }}
            >
                {'<'}
            </button>
            <button
                onClick={e => handleClick(1)}
                style={{
                    right: '40vw',
                    ...style
                }}
            >
                {'>'}
            </button>
        </>
    )
}

export default CameraButtons