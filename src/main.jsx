import React from 'react';
import ReactDOM from 'react-dom/client';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import './index.css';

import Layout from './Layout.jsx';
import Home from './assets/Components/Home/Home.jsx';
import About from './assets/Components/About/About.jsx';
import Contact from './assets/Components/Contact/Contact.jsx';
import User from './assets/Components/User/User.jsx';
import TeaCollection from './assets/Components/Products/Products.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="products" element={<TeaCollection />} />
      <Route path="contact" element={<Contact />} />
      <Route path="login" element={<User />} />
      <Route path="signup" element={<User />} />
      <Route path="forgot-password" element={<User />} />
    </Route>
  )
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
