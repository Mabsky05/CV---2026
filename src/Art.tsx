import React, {useState, useEffect} from 'react'
import pic4 from './assets/4.png'
import pic5 from './assets/5.png'
import pic6 from './assets/6.png'
import pic7 from './assets/7.png'
import pic8 from './assets/8.png'
import pic9 from './assets/9.png'
import pic10 from './assets/10.png'
import pic11 from './assets/11.png'
import pic12 from './assets/12.png'

const picCollection = [pic4, pic5, pic6, pic7, pic8, pic9, pic10, pic11, pic12]

function Art() {

const [pic, setPic] = useState<string[]>([])

useEffect(() => {
  function loadPhotos() {
    const selection = [...picCollection.sort(() => Math.random() - 0.5)]
    setPic(selection)
    } 
      loadPhotos() 
    }, [])

return (
  <div className = "h-screen flex flex-wrap shrink-0 justify-evenly content-around mt-48 bg-orange-300">
    {pic.slice(0,6).map(loadPhotos => (
      <div className = "bg-gray-400 p-2 m-3 h-48 w-48">
        <img className = "h-full w-full object-none" src={loadPhotos}></img></div>
    ))}
  </div>
    )
}

export default Art