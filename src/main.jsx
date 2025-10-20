import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import router from './App.jsx'
import { RouterProvider } from 'react-router-dom'
import ReactDOM from 'react-dom/client'

ReactDOM.createRoot(document.getElementById('root')).render(
 <RouterProvider router={router} />
);
