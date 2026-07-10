import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router/dom";

import "./index.css";

import { router } from "./router/router";
import ThemeProvider from "./context/ThemeProvider";

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Root element not found");
}
 
createRoot(rootElement).render(
  <StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>,
);
