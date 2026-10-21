import React, {useState, useEffect, useRef} from 'react'
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

const [selectedPhoto, setSelectedPhoto] = useState<URL | null>(null);
const dialogRef = useRef<HTMLDialogElement>(null);

const openModal = (photoUrl: URL) => {
  setSelectedPhoto(photoUrl);
  dialogRef.current?.showModal(); // Opens native accessible modal & backdrop
  };

const closeModal = () => {
  dialogRef.current?.close();
  setSelectedPhoto(null);
  };

useEffect(() => {
  function loadPhotos() {
    const selection = [...picCollection.sort(() => Math.random() - 0.5)]
    setPic(selection)
    } 
      loadPhotos() 
    }, [])

return (
  <div className = "h-screen flex flex-wrap shrink-0 justify-evenly content-around">
    {pic.slice(0,6).map((loadPhotos, index) => (
      <div key={index}
          onClick={()=> openModal(loadPhotos)}
       className = "border-2 p-2 divide-dashed h-96 w-96">
        <img className = "h-full w-full object-none" src={loadPhotos}></img>
  </div>
    ))}

       <dialog
         ref={dialogRef}
         onClose={closeModal} // Handles closing via the 'Escape' key natively
         className="ml-6 mt-24 h-9/10 w-full align-center backdrop:bg-black/50 backdrop:backdrop-blur-sm"
       >
         {selectedPhoto && (
           <div className="flex flex-col items-center h-full p-12">
              <img 
               className="h-full w-auto object-contain align-center" 
               src={selectedPhoto} 
               alt="Enlarged view" 
             />
              <div className="flex">
               <button 
                 onClick={closeModal}
                 className="text-gray-500 hover:text-gray-800 font-bold text-2xl px-2"
               >
                 ✕
               </button>
             </div>
           </div>
         )}
       </dialog>


  </div>
    )
}

export default Art
