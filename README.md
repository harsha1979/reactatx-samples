# React Sample Code
ReactATX Meetup Sample Applications

Asgardeo Auth React SDK
https://www.npmjs.com/package/@asgardeo/auth-react

# Let's start
--------------

#### Open the project
Open the project folder using your familar editor and open a terminal from either inside the editor or external terminal

reactatx-samples/react-sample

#### Run this commands in terminal from reactatx-samples/react-sample location
```
npm install 
npm run dev
```
#### Root Access URL
http://localhost:5173/

## Setting up in Asgardeo (Identity Provider Side)

#### Register account and oragnization in Asgardeo 
https://asgardeo.io/signup?utm_source=console

#### Register React SPA application
https://wso2.com/asgardeo/docs/get-started/try-samples/qsg-spa-react/
Use this redirect URL when create the application
```
Redirect URL = http://localhost:5173/
```
#### Create Another User 
https://wso2.com/asgardeo/docs/guides/users/manage-users/
```
harshaasgardeo@wso2.com
ReactATX@2024
```

## Setting and Implementing in the React Application Side

#### Go through the Asgardeo React SDK 
https://www.npmjs.com/package/@asgardeo/auth-react

Go inside this sample prject (main branch) in below folder reactatx-samples/react-sample/src/pages/main.jsx and modify accordingly

#### Install React SDK from npm registry.

```
npm install @asgardeo/auth-react --save
```


### Main.jsx
--------
To update the existing code and wrap the root App component with the AuthProvider component from the React SDK, you can follow these steps. This ensures that all child components within the App component have access to the authContext provided by AuthProvider.

```
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { AuthProvider } from "@asgardeo/auth-react";

const config = {
  signInRedirectURL: "http://localhost:5173/",
  signOutRedirectURL: "http://localhost:5173/",
  clientID: "63jnmnPytGXmHLOqxJ6oNCMNmbka_",
  baseUrl: "https://api.asgardeo.io/t/reactatx",
  scope: ["openid", "profile"],
};

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider config={config}>
      <App />
    </AuthProvider>
  </StrictMode>
);

```


### App.jsx
--------
To secure the /dashboard route using a SecureApp component, you can wrap that specific route within your routing configuration as in the below. When a user directly accesses /dashboard, they will be automatically redirected to the Identity Provider's login screen, which is configured with the AuthProvider at the root level.

```
import "./App.css";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from "./pages/Error";
import { SecureApp } from "@asgardeo/auth-react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/dashboard",
    element: (
      <SecureApp>
        <Dashboard />
      </SecureApp>
    ),
  },
  {
    path: "/error",
    element: <Error />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

```

### Home.jsx
--------
Add a "SignIn" button to the homepage that enables users to initiate the login process by clicking it. This button will redirect users to the Identity Provider for authentication. After authentication, users will be redirected back to the original context, with "http://localhost:5173/" set as the redirect URL in the Identity Provider. 

You can then register a callback function to the useAuthContext hook using the 'on' function, as shown in the code below. This setup will automatically invoke the navigate function, redirecting the user to the dashboard.


```
import reactLogo from "../assets/react.svg";
import viteLogo from "/vite.svg";
import capitalFac from "../assets/cap.png";
import asgardeo from "../assets/asgardeo.png";
import "../App.css";
import { useNavigate } from "react-router-dom";
import { useAuthContext, Hooks } from "@asgardeo/auth-react";
import { useEffect } from "react";

function Home() {
  const navigate = useNavigate();
  const { on, state, signIn } = useAuthContext();

  useEffect(() => {
    on(Hooks.SignIn, () => {
      navigate("/dashboard");
    });
  }, [on]);

  return (
    <div className="home">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="https://www.capitalfactory.com/" target="_blank">
          <img
            src={capitalFac}
            className="logo react"
            alt="Capital Factory logo"
          />
        </a>
        <a href="https://wso2.com/asgardeo/" target="_blank">
          <img src={asgardeo} className="logo react" alt="WSO2 logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <h1>Home Page</h1>
      <div className="card">
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
        <input
          type="button"
          value="SingIn >>"
          className="button"
          onClick={() => {
            signIn();
          }}
        />
      </div>

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default Home;

```




### Dashboard.jsx
--------
Add a logout button to the Dashboard component that, when clicked, triggers the signOut function from the authContext, which is accessible via the useAuthContext hook. This setup ensures users can easily log out from the dashboard and redirect back to the Home page.

```
import reactLogo from "../assets/react.svg";
import viteLogo from "/vite.svg";
import capitalFac from "../assets/cap.png";
import asgardeo from "../assets/asgardeo.png";
import "../App.css";
import { useAuthContext } from "@asgardeo/auth-react";

function Dashboard() {
  const { signOut } = useAuthContext();

  return (
    <div className="dashboard">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="https://www.capitalfactory.com/" target="_blank">
          <img
            src={capitalFac}
            className="logo react"
            alt="Capital Factory logo"
          />
        </a>
        <a href="https://wso2.com/asgardeo/" target="_blank">
          <img src={asgardeo} className="logo react" alt="WSO2 logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <h1>User Dashboard</h1>
      <div className="card">
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
        <input
          type="button"
          value="Logout >>"
          className="button"
          onClick={() => {
            signOut();
          }}
        />
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default Dashboard;

```

### Dashboard.jsx

To read user attributes such as username and roles in your React application, first ensure that roles are established on the Identity Provider side. Using Asgardeo, you would start by creating a group and a role, then assign the role to the group and the group to the user. As the 'roles' attribute needs to be included in the openid or profile scopes, make sure to add it to one of these scopes to retrieve it with the ID Token response. 
In your React application, you can then access this ID Token by calling the getDecodedIDToken function from authContext. 

#### Note that the following code should not be replaced your existing Dashboard.jsx directly; you will need to integrate it appropriately by examining your current code structure.

```
import { useState } from "react";

----
const [name, setName] = useState("Unknown");
const [roles, setRoles] = useState("Unknown");
const { state, signOut, getDecodedIDToken } = useAuthContext();

-----
useEffect(() => {
    getDecodedIDToken()
      .then((token) => {
        setName(token?.username);
        setRoles(token?.roles);
      })
      .catch((error) => {
        console.error("Error while getting the decoded ID token", error);
      });
  }, [getDecodedIDToken, state]);

-----
<h2>Username : {name}</h2>
<h2>Roles : {Array(roles).join()}</h2>

```



