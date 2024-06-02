import Login from "@/pages/auth/login";
import Home from "@/pages/home";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import ProtectedRoute from "./protected-route";
import Register from "@/pages/auth/register";
import DetailProductByAdmin from "@/pages/admin/module/detail-product";
import EditProfile from "@/pages/edit-profile";
import AllProducts from "@/pages/products";
import DetailProducts from "@/pages/detail-products/detail-product";
import Admin from "@/pages/admin";
import AddEditProducts from "@/pages/admin/module/add-edit-product";
import DetailDoctor from "@/pages/detail-doctor";
import ClinicLists from "@/pages/clinic-lists";
import ServiceRequests from "@/pages/admin/module/service-requests";
import Sales from "@/pages/admin/module/sales";

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
          path: "/edit-profile",
          element: <EditProfile />,
        },
        {
          path: "/admin",
          element: <Admin />,
        },
        {
          path: "/clinic-lists",
          element: <ClinicLists />,
        },
        {
          path: "/detail-doctor/:id",
          element: <DetailDoctor />,
        },
        {
          path: "/admin/products/:id",
          element: <DetailProductByAdmin />,
        },
        {
          path: "/admin/products/:id",
          element: <DetailProductByAdmin />,
        },
        {
          path: "/admin/products/add-edit/:id",
          element: <AddEditProducts />,
        },
        {
          path: "/admin/service-requests",
          element: <ServiceRequests />,
        },
        {
          path: "/admin/sales",
          element: <Sales />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
