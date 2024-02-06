import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Components/Home";
import Articles from "../Components/Articles";
import Books from "../Components/Books";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/articles",
        element: <Articles />,
      },
      {
        path: "/books",
        element: <Books />,
      },
    ],
  },
]);

export default routes;
