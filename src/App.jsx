import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AppLayout from './Layout/AppLayout'
import Home from './Pages/Home'
import ErrorPage from './Component/ErrorPage'
import About from './Pages/About'
import Contact from './Pages/Contact'
import GraphicDesign from './Pages/GraphicDesign'
import WebDevelopement from './Pages/WebDevelopement'
import SEO from './Pages/SEO'
import GMB from './Pages/GMB'
import ContentWriting from './Pages/ContentWriting'
import UiUxDesign from './Pages/UiUxDesign'


const App = () => {
  const router=createBrowserRouter([
    {
      path:"/",
      element:<AppLayout/>,
      errorElement:<ErrorPage/>,
      children:[
        {
          path:"/",
          element:<Home/>
        },
        {
          path:"/about",
          element:<About/>
        }
        ,
        {
          path:"/contact",
          element:<Contact/>
        }
        ,
        {
          path:"/services/graphic-design",
          element:<GraphicDesign/>
        }
        ,
        {
          path:"/services/web-development",
          element:<WebDevelopement/>
        }
        ,
        {
          path:"/services/seo",
          element:<SEO/>
        }
        ,
        {
          path:"/services/gmb",
          element:<GMB/>
        }
        ,
        {
          path:"/services/content-writing",
          element:<ContentWriting/>
        }
        
        ,
        {
          path:"/services/ui-ux",
          element:<UiUxDesign/>
        }
      ]
    }
  ])
  
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App