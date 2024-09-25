import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { AuthProvider } from "@asgardeo/auth-react";

const config = {
  signInRedirectURL: "http://localhost:5173/",
  signOutRedirectURL: "http://localhost:5173/",
  clientID: "63jnmnPytGXmHLOqxJ6oNCMNmbka",
  baseUrl: "https://api.asgardeo.io/t/reactatx",
  scope: ["openid", "profile"],
  resourceServerURLs: ["https://jsonplaceholder.typicode.com"],
  storage: "webWorker",
};

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider config={config}>
      <App />
    </AuthProvider>
  </StrictMode>
);
