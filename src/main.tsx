import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import About from './About.tsx'
import Profile from './Profile.tsx'
import Projects from './Projects.tsx'
import CV from './CV.tsx'
import {createBrowserRouter, RouterProvider} from "react-router-dom"

const router = createBrowserRouter ([
  { path:"/", element: <App/> },
  { path:"/about", element: <About/> },
  { path: "/profile", element: <Profile/>},
  { path: "/projects", element: <Projects/>},
  { path: "/CV", element: <CV/>}

])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)

//Navbar (hideable) = Home
//App - Home
//About  
//Profile
//Projects
//Game?
