import { createBrowserRouter } from "react-router";
import RootLayout from "../layout/RootLayout";
import Home from "../components/pages/Home/Home/Home";
import Projects from "../components/pages/Projects/Projects";
import ProjectDetails from "../components/pages/Projects/ProjectDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <p>error</p>,
    children: [
      { index: true, element: <Home /> },
      { path: "projects", element: <Projects /> },
      { path: "/projects/:id", element: <ProjectDetails /> },
    ],
  },
]);
