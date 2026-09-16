import About from './About.tsx'
import Art from './Art.tsx'
import Code from './Code.tsx'

import { BrowserRouter, NavLink, Routes, Route, Link } from 'react-router-dom';
import Navbar from './Navbar.tsx';
import Game from './Game.tsx';

function App() {
  return (
    <>
    {<Navbar/>}
    {<Game/>}
    </> 
  
  )
}

export default App
