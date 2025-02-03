import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import "./index.css";
import Home from "./Component/Home/Home.jsx";
import About from "./Component/About/About.jsx";
import Layout from "./Layout.jsx"; 
import Contact from "./Component/Contact/Contact.jsx";
import User from "./Component/User/User.jsx";
import Github, { githubInfoLoader } from "./Component/Github/Github.jsx";
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />, //
//     children: [
//       {
//         path: "",
//         element: <Home />,
//       },
//       {
//         path: "about",
//         element: <About />,
//       },
//       {
//         path:"Contact",
//         element:<Contact/>
//       }
//     ],
//   },
// ]);



const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />  {/* This is the default route for / */}
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="user/:userid" element={<User />} /> {/* Fixed typo in userId */}
        <Route
        loader={githubInfoLoader}
        path="Github"
         element={<Github/>}/>
      </Route>
    </>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
