import Layout from "@/components/Layout";
import Login from "@/pages/auth/login";
import Home from "@/pages/home";
import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";

const routes = createRoutesFromElements(
  <>
    <Route element={<Layout />}>
      <Route index element={<Home />} />
    </Route>
    <Route path="/login" element={<Login />} />
  </>
);

export const router = createBrowserRouter(routes);
