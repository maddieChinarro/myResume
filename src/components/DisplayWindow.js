import { useState } from 'react'
import '../styles/modules/Display.css'
import Window from './Window'

function DisplayWindow() {
    const [window, setWindow] = useState('web')

    return (
        <div className='displayWindow'>
            <div className='displayWindow__navbar'>
                <button className='displayWindow__button' onClick={() => setWindow('web')} >Version web</button>
                <button className='displayWindow__button' onClick={() => setWindow('mobile')} >Version mobile</button>
            </div>
            <Window window={window} />
        </div>
    )
}

export default DisplayWindow