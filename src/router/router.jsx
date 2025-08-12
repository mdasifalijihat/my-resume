import { createBrowserRouter } from "react-router";
import RootLayout from "../layout/RootLayout";
import Home from "../components/pages/Home/Home/Home";



export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <p>error</p>,
    children: [
      { index: true, element: <Home /> },    
    ],
  },
]);
