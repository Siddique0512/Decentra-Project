import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/pages/Product';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Blog from './components/pages/Blog';
import Blog2 from './components/pages/Blog2';
import About from './components/pages/About';
import About2 from './components/pages/About2';
import Home from './components/Home';
import Home1 from './components/Home1';
import Contact from './components/pages/Contact';
import Contact2 from './components/pages/Contact2';
import Product from './components/pages/Product';
import Product2 from './components/pages/Product2';
import Signup from './components/pages/Signup';
import Login from './components/pages/Login';
import DecentraPass from './components/pages/DecentraPass';
import DecentraPass2 from './components/pages/DecentraPass2';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Home/>
  // <div>Hello world!</div>,
  },
  {
    path: "product/",
    element:<Product/>
  // <div>Hello world!</div>,
  },
  {
    path: "signup/",
    element:<Signup/>
  // <div>Hello world!</div>,
  },
  {
    path: "login/",
    element:<Login/>
  // <div>Hello world!</div>,
  },
  {
    path: "home1/",
    element:<Home1/>
  // <div>Hello world!</div>,
  },
  
  {
    path: "product2/",
    element:<Product2/>
  // <div>Hello world!</div>,
  },
  {
    path: "contact2/",
    element:<Contact2/>
  // <div>Hello world!</div>,
  },
  {
    path: "blog2/",
    element:<Blog2/>
  // <div>Hello world!</div>,
  },
  {
    path: "decentrapass/",
    element:<DecentraPass/>
  // <div>Hello world!</div>,
  },
  {
    path: "decentrapass2/",
    element:<DecentraPass2/>
  // <div>Hello world!</div>,
  },
  
  {
    path: "about2/",
    element:<About2/>
  // <div>Hello world!</div>,
  },
  
  {
    path: "about/",
    element:<About/>
  // <div>Hello world!</div>,
  },
  {
    path: "Contact/",
    element:<Contact/>
  // <div>Hello world!</div>,
  },
  {
    path: "blog/",
    element:<Blog/>
  // <div>Hello world!</div>,
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
  <RouterProvider router = {router}/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
