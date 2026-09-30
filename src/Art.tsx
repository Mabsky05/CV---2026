import React, {useState, useEffect} from 'react'
import pic4 from './assets/4.jpg'
import pic5 from './assets/5.jpg'
import pic6 from './assets/6.jpg'
import pic7 from './assets/7.jpg'
import pic8 from './assets/8.jpg'
import pic9 from './assets/9.jpg'
import pic10 from './assets/10.jpg'
import pic11 from './assets/11.jpg'

const picCollection = [pic4, pic5, pic6, pic7, pic8, pic9, pic10, pic11]

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
    {pic.map(loadPhotos => (
      <div className = "bg-gray-400 p-2 m-3 h-48 w-48">
        <img className = "h-full w-full object-none" src={loadPhotos}></img></div>
    ))}
  </div>
    )
}

export default Art