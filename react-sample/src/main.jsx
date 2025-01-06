import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { AuthProvider } from "@asgardeo/auth-react";

const config = {
  signInRedirectURL: "http://localhost:5173/",
  signOutRedirectURL: "http://localhost:5173/",
  clientID: "xci1fLxZpHWUTRDZePfwG4ZK_4Ia",
  baseUrl: "https://api.asgardeo.io/t/harshareactdemo",
  scope: ["openid", "profile", "groups", "email"],
  storage: "webWorker",
};
//# sessionStorage   localStorage  webWorker
//resourceServerURLs: ["https://jsonplaceholder.typicode.com"],

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider config={config}>
      <App />
    </AuthProvider>
  </StrictMode>
);
