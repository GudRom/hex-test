import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AuthPage from "./pages/AuthPage/AuthPage.tsx";
import DashboardPage from "./pages/DashboardPage/DashboardPage.tsx";
import MainPage from "./pages/MainPage/MainPage.tsx";
import AuthLayout from "./components/AuthLayout";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const client = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <MainPage />,
      },
      {
        path: "dashboard",
        element: <DashboardPage />,
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "log-in",
        element: <AuthPage />,
      },
      {
        path: "sign-up",
        element: <AuthPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={client}>
      <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />
    </QueryClientProvider>
  </React.StrictMode>
);
