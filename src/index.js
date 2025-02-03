import React from "react";
import ReactDOM from "react-dom/client"; // Use createRoot from React 18
import App from "./App";
import { AuthProvider } from "./auth/authContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>
);