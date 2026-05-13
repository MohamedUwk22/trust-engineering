import { createBrowserRouter } from "react-router";
import { Root } from "./components/Root";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Services } from "./pages/Services";
import { Projects } from "./pages/Projects";
import { ProjectDetails } from "./pages/ProjectDetails";
import { News } from "./pages/News";
import { Careers } from "./pages/Careers";
import { Contact } from "./pages/Contact";
import { Team } from "./pages/Team";
import { Awards } from "./pages/Awards";
import { NotFound } from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "services", Component: Services },
      { path: "projects", Component: Projects },
      { path: "projects/:id", Component: ProjectDetails },
      { path: "news", Component: News },
      { path: "careers", Component: Careers },
      { path: "contact", Component: Contact },
      { path: "team", Component: Team },
      { path: "awards", Component: Awards },
      { path: "*", Component: NotFound },
    ],
  },
], { 
  basename: "/Trust-engineering" 
});