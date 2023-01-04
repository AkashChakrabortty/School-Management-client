import React from 'react';
import { createBrowserRouter, Outlet } from "react-router-dom";
import Footer from '../components/Footer/Footer';
import NavBar from '../components/NavBar/NavBar';
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <NavBar />
        <Outlet></Outlet>
        <Footer></Footer>
      </>
    ),
  },
]);

export default router;