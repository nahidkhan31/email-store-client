import { Component, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import MainLayouts from "./layouts/MainLayouts.jsx";
import Home from "./components/Home.jsx";
import AddEmail from "./components/AddEmail.jsx";
import UpdateEmail from "./components/UpdateEmail.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayouts,
    children: [
      {
        index: true,
        path: "/",
        Component: Home,
      },
      {
        path: "/addEmail",
        Component: AddEmail,
      },
      {
        path: "/updateEmail",
        Component: UpdateEmail,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </StrictMode>
);
