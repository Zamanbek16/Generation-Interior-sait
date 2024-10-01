import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainPage from './page/MainPage.jsx'
import GenerationPage from "./page/GenerationPage.jsx";
import PageNotFound from "./page/PageNotFound.jsx";
import NewResultPage from "./page/NewResultPage.jsx";
import InteriorStylesPage from "./page/InteriorStylesPage.jsx";
import About from "./page/About.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
    errorElement: <PageNotFound />,
  },
  {
    path: "/generate",
    element: <GenerationPage />,
  },
  {
    path: "/newResultPage",
    element: <NewResultPage />,
  },
  {
    path: "/interiorStylesPage",
    element: <InteriorStylesPage />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
