import { useState } from 'react';
import pic1 from './assets/1.jpg';
import pic2 from './assets/2.jpg';
import pic3 from './assets/3.jpg';

const carousel = [pic1, pic2, pic3]

export function Home() {
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

export default Home

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