import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import App from './App';
import "./style.css";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from './Login';
import { Register } from './Register';
import { ForgotPassword } from './ForgotPassword';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  
  {
    path: "login",
    element: <Login />,
  },
  
  {
    path: "register",
    element: <Register />,
  }, 
  
  {
    path: "ForgotPassword",
    element: <ForgotPassword />,
  }, 
  
  
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


