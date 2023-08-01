import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Login from './Login';
import Contactus from './Contactus';
import Aboutus from './Aboutus';
import Package from './Package';




import{
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "about",
    element: <Aboutus />,
  },
  {
    path: "contact",
    element: <Contactus />,
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "packages",
    element: <Package />,
  },
]);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <RouterProvider router={router} />
  </React.StrictMode>
  
);
