import { Component, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import MainLayouts from "./layouts/MainLayouts.jsx";
import Home from "./components/Home.jsx";
import AddEmail from "./components/AddEmail.jsx";
import UpdateEmail from "./components/UpdateEmail.jsx";
import EmailDetails from "./components/EmailDetails.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayouts,
    children: [
      {
        index: true,
        path: "/",
        loader: () => fetch("http://localhost:3000/emails"),
        Component: Home,
      },
      {
        path: "/addEmail",
        Component: AddEmail,
      },
      {
        path: "/updateEmail/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:3000/emails/${params.id}`),
        Component: UpdateEmail,
      },
      {
        path: "/emailDetails/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:3000/emails/${params.id}`),
        Component: EmailDetails,
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
