import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home.jsx';
import Ragister from './pages/Ragister.jsx';
import Login from './pages/Login.jsx';
import AuthProvider from './provider/AuthProvider.jsx';
import Dashboard from './pages/Dashboard.jsx';
import Banner from './components/Banner.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path: '/ragister',
        element: <Ragister></Ragister>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/dashboard',
        element: <Dashboard></Dashboard>
      },
      {
        path: '/banner',
        element: <Banner></Banner>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
 <AuthProvider><RouterProvider router={router} /></AuthProvider>
  </React.StrictMode>,
)
