import React from 'react';
import { createBrowserRouter, Outlet } from "react-router-dom";
import Footer from '../components/Footer/Footer';
import Home from '../components/Home/Home';
import NavBar from '../components/NavBar/NavBar';
import CheckinStudent from '../Pages/CheckinStudent/CheckinStudent';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import PresentStudent from '../Pages/PresentStudent/PresentStudent';
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
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/checkin",
        element: <CheckinStudent></CheckinStudent>,
      },
      {
        path: "/present",
        element: <PresentStudent></PresentStudent>,
      },
    ],
  },
]);

export default router;