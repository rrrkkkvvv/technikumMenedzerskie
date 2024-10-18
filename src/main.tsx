import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { urls } from "./constants/stringConstants";
import Header from "./modules/Header";
import MainPage from "./pages/MainPage/MainPage";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: (
        <>
          <Header />
          <Outlet />
          {/* <Footer/> */}
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
  { basename: urls.basename }
);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
