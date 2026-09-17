import { useState } from 'react';
import image1 from './assets/1.jpg';
import image2 from './assets/2.jpg';
import image3 from './assets/3.jpg';

const carousel = [image1, image2, image3]

export function Game() {
    const [picNumber, setpicNumber] = useState(0)

    function picCounter(){
        setpicNumber(picIndex => ((picIndex + 1) % carousel.length)); 
    }

    return (
        <div>
        <button className = "bg-amber-400" onClick={picCounter}>yo
        </button>
            <h4>This is the pic counter: ({picNumber})</h4>
            <img src= {carousel[picNumber]}></img>
        </div>
    )

}

export default Game

// export function Game() {
//     const [pic, setPic] = useState(false)

//     function handleToggle(){
//         setPic(prevState => !prevState) 
//     }

//     return (
//         <button className = "bg-amber-400" onClick={handleToggle}>
//             { pic ? 'attached' : 'notattached' } 
//         </button>
//     )

// }