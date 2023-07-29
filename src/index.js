import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import About from './components/About/about';
import Contacts from './components/Contacts/Contact';
import SignIn from './components/SignIn/signin';
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
    element: <Contacts />,
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
