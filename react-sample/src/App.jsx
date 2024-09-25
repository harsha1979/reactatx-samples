import "./App.css";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from "./pages/Error";
import { SecureApp } from "@asgardeo/auth-react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/dashboard",
    element: (
      <SecureApp>
        <Dashboard />
      </SecureApp>
    ),
  },
  {
    path: "/error",
    element: <Error />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
