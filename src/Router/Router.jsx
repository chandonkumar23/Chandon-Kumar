import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../Home/Home";
import Services from "../pages/Services/Services";
import About from "../pages/Services/About/About";
import Contact from "../pages/Services/Contact/Contact";
import Skills from "../pages/Services/Skills/Skills";
import Error from "../Error";
import Project from "../pages/Services/Projects/NavProject/Project";

export const router =  createBrowserRouter ([
{
  path:'/',
  element:<Main></Main>,
  errorElement:<Error></Error>,
  children:[
    {
      path:'/',
      element:<Home></Home>
    },
    {
      path:'/services',
      element:<Services></Services>,
    },
    {
      path:'/projects',
      element:<Project></Project>,
    },
    {
      path:'about',
      element:<About></About>
    },
    {
      path:'contact',
      element: <Contact></Contact>
    },
    {
      path:'skills',
      element:<Skills></Skills>
      
    }
  ],
 
},


    
]);

