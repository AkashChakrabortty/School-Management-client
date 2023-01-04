import React from 'react';
import { createBrowserRouter, Outlet } from "react-router-dom";
import Footer from '../components/Footer/Footer';
import NavBar from '../components/NavBar/NavBar';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
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
    errorElement : <ErrorPage></ErrorPage>
  },
]);

export default router;