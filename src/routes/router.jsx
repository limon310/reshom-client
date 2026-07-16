import { createBrowserRouter } from "react-router";
import MainLayouts from "../layouts/MainLayouts/MainLayouts";
import Home from "../pages/Home/Home";
import Collection from "../pages/Collection/Collection";

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
        }
    ]
  },
]);