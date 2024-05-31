import Login from "@/pages/auth/login";
import Home from "@/pages/home";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import ProtectedRoute from "./protected-route";
import Register from "@/pages/auth/register";

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
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
