import Login from "@/pages/auth/login";
import Home from "@/pages/home";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import ProtectedRoute from "./protected-route";
import Register from "@/pages/auth/register";
import DetailProductByAdmin from "@/pages/admin/module/detail-product";
import EditProfile from "@/pages/edit-profile";
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
          path: "/admin/products/:id",
          element: <DetailProductByAdmin />,
        },
        {
          path: "/edit-profile",
          element: <EditProfile />,
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
