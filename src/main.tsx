import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import About from './About.tsx'
import Art from './Art.tsx'
import Code from './Code.tsx'
import {BrowserRouter, createBrowserRouter, RouterProvider} from "react-router-dom"

// const router = createBrowserRouter ([
//   { path:"/", element: <App/> },
//   { path:"/about", element: <About/> },
//   { path: "/profile", element: <Profile/>},
//   { path: "/projects", element: <Projects/>},
//   { path: "/CV", element: <CV/>}

// ])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </StrictMode>,
)

//Navbar (hideable) = Home
//App - Home
//About  
//Profile
//Projects
//Game?
