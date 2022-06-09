import { useEffect } from 'react';
import moleImg from '../assets/mole.png'

const Mole = (props) => {

    useEffect(() => {
        let randSeconds = Math.ceil(Math.random() * 10000)
        let timer = setTimeout(() => {
            props.toggle(false)
        }, randSeconds)
        return () => clearTimeout(timer)
    })

    return (
        <div>
            <img src={moleImg} onClick={props.handleClick} style={{'width': '30vw'}} />
        </div>
    )
};

export default Mole;