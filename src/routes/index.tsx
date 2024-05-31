import Login from "@/pages/auth/login";
import Home from "@/pages/home";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import ProtectedRoute from "./protected-route";
import Register from "@/pages/auth/register";
import AllProducts from "@/pages/products";
import DetailProducts from "@/pages/detail-products/detail-product";
import DetailProductByAdmin from "@/pages/admin/module/detail-product";

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
        {
          path: "/admin/products/:id",
          element: <DetailProductByAdmin />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
