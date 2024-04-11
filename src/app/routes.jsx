import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./Layout";
import { Main } from "../pages/Main/Main";
import { Cart } from "../pages/Cart/Cart";
import { Post } from "../pages/Post/Post";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Main />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/cart/:id",
        element: <Post />,
      },
    ],
  },
]);
