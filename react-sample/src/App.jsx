import "./App.css";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Unauthorize from "./pages/Unauthorize";

function App() {
  const router = createBrowserRouter([
    {
      path: "/home",
      element: <Home />,
    },
    {
      path: "/dashboard",
      element: <Dashboard />,
    },
    {
      path: "/unauthorize",
      element: <Unauthorize />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
