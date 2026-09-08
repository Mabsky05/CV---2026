import About from './About.tsx'
import Profile from './Profile.tsx'
import Projects from './Projects.tsx'
import Game from './Game.tsx'

import { BrowserRouter, NavLink, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <>
    <h1 className= "flex h-screen items-center justify-center">
      <nav>
        <NavLink to="/" className= "btn">Home</NavLink>
        <NavLink to="/About">About</NavLink>
        <NavLink to="/Profile">Profile</NavLink>
        <NavLink to="/Projects">Projects</NavLink>
        <NavLink to="/Game">Game</NavLink>
      </nav>
    </h1> 
      <Routes>
        {/* <Route path="/" element={<App/>}></Route> */}
        <Route path="/About" element={<About/>} ></Route>
        <Route path="/Profile" element={<Profile/>}></Route>
        <Route path="/Projects" element={<Projects/>}></Route>
        <Route path="/Game" element={<Game/>}></Route>
      </Routes>
   </> 
  
  )
}

export default App
