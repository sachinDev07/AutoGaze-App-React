import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";

import "./index.css";
import HomePage from "./pages/HomePage.jsx";
import ModelSPage from "./pages/ModelSPage.jsx";
import Model3Page from "./pages/Model3Page.jsx";
import ModelXPage from "./pages/ModelXPage.jsx";
import ModelYPage from "./pages/ModelYPage.jsx";
import ShopPage from "./pages/ShopPage.jsx";
import CartPage from "./pages/CartPage.jsx";
import ThankYouPage from "./components/ThankYouPage.jsx";

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

      {
        path: "/thankyou",
        element: <ThankYouPage />,
      },
    ],
  },
]);

const root = createRoot(document.getElementById("root"));
root.render(
  <Auth0Provider
    domain="dev-jz4jygmjzh67rv48.us.auth0.com"
    clientId="9KfFIq1YCK11kN0orMaibiFaA7eed9KO"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <RouterProvider router={router} />
  </Auth0Provider>
);
