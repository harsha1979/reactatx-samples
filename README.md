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
ReactATX_2024
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
const config = {

signInRedirectURL: "https://localhost:3000/sign-in",
signOutRedirectURL: "https://localhost:3000/dashboard",
clientID: "<client_ID>",
baseUrl: "https://api.asgardeo.io/t/<org_name>",
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
{
    path: "/dashboard",
    element: (
      <SecureApp>
        <Dashboard />
      </SecureApp>
    ),
  }
```
