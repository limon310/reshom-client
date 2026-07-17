import { createBrowserRouter } from "react-router";
import MainLayouts from "../layouts/MainLayouts/MainLayouts";
import Home from "../pages/Home/Home";
import Collection from "../pages/Collection/Collection";
import ProductDetails from "../pages/ProductDetails/ProductDetails";
import Cart from "../pages/Cart/Cart";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayouts,
    children: [
        {
            index: true,
            Component: Home
        },
        {
          path: "/collection",
          Component: Collection
        },
        {
          path: "/product-details/:id",
          Component: ProductDetails
        },
        {
          path: "/cart",
          Component: Cart
        }
    ]
  },
]);