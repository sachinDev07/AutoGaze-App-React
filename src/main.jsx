import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import HomePage from "./pages/HomePage.jsx";
import ModelSPage from "./pages/ModelSPage.jsx";
import Model3Page from "./pages/Model3Page.jsx";
import ModelXPage from "./pages/ModelXPage.jsx";
import ModelYPage from "./pages/ModelYPage.jsx";
import ShopPage from "./pages/ShopPage.jsx";
import CartPage from "./pages/CartPage.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/models",
        element: <ModelSPage />,
      },
      {
        path: "/model3",
        element: <Model3Page />,
      },
      {
        path: "/modelx",
        element: <ModelXPage />,
      },
      {
        path: "/modely",
        element: <ModelYPage />,
      },
      {
        path: "/shop",
        element: <ShopPage />,
      },
      {
        path: "/cart",
        element: <CartPage />,
      },
    ],
  },
]);

const root = createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
