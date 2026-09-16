import About from './About.tsx'
import Art from './Art.tsx'
import Code from './Code.tsx'


import { BrowserRouter, NavLink, Routes, Route, Link } from 'react-router-dom';

function Navbar() {
  return (
    <>
    <h1>
      <nav className= "flex justify-around py-5 bg-green-400">
        <NavLink to="/" className="bg-blue-400">Home</NavLink>
        <NavLink to="/About">About</NavLink>
        <NavLink to="/Art">Art</NavLink>
        <NavLink to="/Code">Code</NavLink>
      </nav>
    </h1> 
      <Routes>
        <Route path="/About" element={<About/>} ></Route>
        <Route path="/Art" element={<Art/>}></Route>
        <Route path="/Code" element={<Code/>}></Route>
      </Routes>
   </> 
  
  )
}

export default Navbar