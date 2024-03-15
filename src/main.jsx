import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {

  RouterProvider,
} from "react-router-dom";
import { router } from './Router/Router.jsx';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div  className='bg-[#2f2477]'>
    <RouterProvider router={router} />
    </div>

    <App />
  </React.StrictMode>,
)
