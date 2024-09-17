import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './globalVariables.css'
import './index.css'
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import Depoimentos from './pages/depoimentos';
import Home from './pages/home';
import AboutMe from './pages/aboutMe'

const root = document.getElementById('root');
const router = createBrowserRouter([
  {
    path:"/",
    element: <Home/>,
    index:true,
  },
  {
    path:"/depoimentos",
    element:<Depoimentos/>
  },
  {
    path:"/sobremim",
    element: <AboutMe/>
  },
]);
if(root){
  createRoot(root).render(
    <StrictMode>
      <RouterProvider router={router}/>
    </StrictMode>,
  )
}
