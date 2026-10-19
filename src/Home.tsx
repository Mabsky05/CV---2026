import { useState } from 'react';
import pic1 from './assets/L-1.png';
import pic2 from './assets/L-2.png';
import pic3 from './assets/L-3.png';
import pic4 from './assets/L-4.png';
import pic5 from './assets/L-5.png';
import pic6 from './assets/L-6.png';

const carousel = [pic1, pic2, pic3, pic4, pic5, pic6]

export function Home() {
    const [picNumber, setpicNumber] = useState(0)

    function picCounter(){
        setpicNumber(picIndex => ((picIndex + 1) % carousel.length)); 
    }

    return (
        <div className="flex justify-center" >
            <img className="flex h-dvh justify-center object-contain pb-36 pt-12" onClick={picCounter} src= {carousel[picNumber]}></img>
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