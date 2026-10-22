import Home from './Home.tsx'
import About from './About.tsx'
import Art from './Art.tsx'
import Code from './Code.tsx'


import {NavLink, Routes, Route} from 'react-router-dom';

function Navbar() {
  return (
    <>
    <h1>
      <nav className= "flex justify-evenly text-3xl tracking-widest py-2">
        <NavLink to="/" className="btn px-4 py-4 hover:ring">Home</NavLink>
        <NavLink to="/About" className="btn px-4 py-4 hover:ring">About</NavLink>
        <NavLink to="/Art" className="btn px-4 py-4 hover:ring">Art</NavLink>
        <NavLink to="/Code" className="btn px-4 py-4 hover:ring">Code</NavLink>
      </nav>
    </h1> 
      <Routes>
        <Route path="/" element={<Home/>} ></Route>
        <Route path="/About" element={<About/>} ></Route>
        <Route path="/Art" element={<Art/>}></Route>
        <Route path="/Code" element={<Code/>}></Route>
      </Routes>
   </> 
  
  )
}

export default Navbar