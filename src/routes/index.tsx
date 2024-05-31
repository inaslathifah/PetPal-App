import Login from "@/pages/auth/login";
import Home from "@/pages/home";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import ProtectedRoute from "./protected-route";
import Register from "@/pages/auth/register";
import AllProducts from "@/pages/products";
import DetailProducts from "@/pages/detail-products/detail-product";

const App = () => {
  const router = createBrowserRouter([
    {
      element: <ProtectedRoute />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/register",
          element: <Register />,
        },
        {
          path: "/products",
          element: <AllProducts />,
        },
        {
          path: "/products/:id",
          element: <DetailProducts />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
