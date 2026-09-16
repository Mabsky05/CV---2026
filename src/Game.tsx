import { useState } from 'react';

export function Game() {
    const [pic, setPic] = useState(false)

    function handleClick(){
        setPic(true)
    }

    return (
        <button className = "bg-amber-400" onClick={handleClick}>
            what is { pic.toString() }
        </button>
    )

}

export default Game