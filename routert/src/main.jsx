import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";
import Home from "./Component/Home/Home.jsx";
import About from "./Component/About/About.jsx";
import Layout from "./Layout.jsx"; 
import Contact from "./Component/Contact/Contact.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, //
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path:"Contact",
        element:<Contact/>
      }
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
