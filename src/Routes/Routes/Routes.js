import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layouts/Main";
import HomePage from "../../Pages/HomePage/HomePage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
    ],
  },
]);
