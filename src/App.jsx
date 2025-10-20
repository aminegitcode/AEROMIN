import { useState } from 'react'
import {createBrowserRouter} from "react-router-dom";
import Root from './layouts/Root';
import Home from './pages/Home';
import Sidebar from './components/Sidebar';
import Statistics from './pages/Statistics';

import Alerts from './pages/Alerts';

import Settings from './pages/Settings';
import NotFound from './pages/NotFound';
import Contact  from './pages/Contact';


  const router = createBrowserRouter([
    {
      path:"/",
      element:<Root/>,
      children:[
        {
          index:true, 
          element:<Home/>
        },
        {
          path:"/statistics",
          element: <Statistics/>
        },
    
        {
          path:"/alerts",
          element: <Alerts/>
        },
      
        {
          path:"/settings",
          element:<Settings/>
        },
        {
          path:"/contact",
          element:<Contact/>

        },
      
      ]
    },
     {
    path: "*", 
    element: <NotFound />,
  },
   

    
    

  
  ]);


export default router;
