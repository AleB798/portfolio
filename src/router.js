import { createBrowserRouter, RouterProvider } from "react-router-dom";
//importer toutes les pages
import Home from "./pages/Home.js";


function Router () {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    }
  ])

  return <RouterProvider router={router} />
}

export default Router;