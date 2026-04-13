import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import MainLayout from './Component/MainLayout/MainLayout';
import Home from './Component/Home/Home';
import Timeline from './Component/Timeline/Timeline';
import Stats from './Component/Stats/Stats';


const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      { index: true, Component: Home },
      { path: "/timeline", Component: Timeline },
      { path: "/stats",Component:Stats },
    ],
  },
]);


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
