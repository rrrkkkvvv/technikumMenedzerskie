import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import MainPage from "../pages/MainPage/MainPage";
import Footer from "../modules/Footer";
import Header from "../modules/Header";
import { urls } from "../constants/stringConstants";
import "./main.module.scss";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: (
        <>
          <Header />
          <Outlet />
          <Footer />
        </>
      ),
      children: [
        {
          index: true,
          path: "/",
          element: <MainPage />,
        },

        // {
        //   path: "/path",
        //   element:  <AnotherPage/>
        // },
      ],
    },
  ],
  { basename: urls.siteRoutes.basename }
);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
