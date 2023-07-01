import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Contact from "./components/Contact.jsx";
import Hero from "./components/Hero.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: '/',
        element: <Hero />,
      },
      {
        path: 'contact',
        element: <Contact />,
      }
    ]
  },
]);

const root = createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
