import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Logo from "./ui/Logo";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { urls } from "./constants/stringConstants";
 
const router = createBrowserRouter([
  {
    path: "/",
    element: <Logo />,
  },
], {basename: urls.basename});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />

  </StrictMode>
);
