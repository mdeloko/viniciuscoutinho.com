import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider} from 'react-router-dom';

import Opinions from './pages/Opinions/opinions';
import Home from './pages/Home/home';
import AboutMe from './pages/AboutMe/aboutme'
import Photos from './pages/Photos/photos';

import './globalVariables.css';
import './index.css';

const root = document.getElementById('root');
const router = createBrowserRouter([
  {
    path:"/",
    element: <Home/>,
    index:true,
  },
  {
    path:"/depoimentos",
    element:<Opinions/>
  },
  {
    path:"/sobremim",
    element: <AboutMe/>
  },
  {
    path: "/fotos",
    element:<Photos/>
  }
]);
if(root){
  createRoot(root).render(
    <StrictMode>
      <RouterProvider router={router}/>
    </StrictMode>,
  )
}
