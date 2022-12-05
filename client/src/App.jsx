import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Create from "./components/create";
import ErrorPage from "./components/error";
import Read from "./components/read";
import Update from "./components/update";
import Auth from "./components/auth";
import View from "./components/view";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Auth />,
    errorElement: <ErrorPage />,
  },
  {
    path: "read",
    element: <Read />,
    errorElement: <ErrorPage />,
  },
  {
    path: "create",
    element: <Create />,
    errorElement: <ErrorPage />,
  },
  {
    path: "update",
    element: <Update />,
    errorElement: <ErrorPage />,
  },
  {
    path: "view",
    element: <View />,
    errorElement: <ErrorPage />,
  },
]);

export default function App() {
  return (
    <div>
      <div className="main">
        <h1 className="main-header">Employee List</h1>
        <RouterProvider router={router} />
      </div>
    </div>
  );
}
