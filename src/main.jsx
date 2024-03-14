import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import ItemProductList from "./pages/ItemProductList";
import Rootlayout from "./layouts/RootLayout";

const router = createBrowserRouter([
  {
    element: <Rootlayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/item-product-list/:type",
        element: <ItemProductList />,
      },
      {
        path: "/product-detail",
        element: <ProductDetail />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
