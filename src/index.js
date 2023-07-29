import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import About from './components/About/about';
import Contact from './components/Contact/Contact';
import SignIn from './components/Sign In/signin';
import Packages from './components/Packages/Packages';


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
    element: <About />,
  },
  {
    path: "contact",
    element: <Contact />,
  },
  {
    path: "login",
    element: <SignIn />,
  },
  {
    path: "packages",
    element: <Packages />,
  },
]);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <RouterProvider router={router} />
  </React.StrictMode>
  
);
