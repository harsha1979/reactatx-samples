# React Sample Code
ReactATX Meetup Sample Applications

Asgardeo Auth React SDK
https://www.npmjs.com/package/@asgardeo/auth-react

# Lets start

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

#### Register account in Asgardeo 
https://asgardeo.io/signup?utm_source=console

#### Register React SPA application
https://wso2.com/asgardeo/docs/get-started/try-samples/qsg-spa-react/
```
Redirect URL = http://localhost:5173/
```
#### Go through the Asgardeo React SDK 
https://www.npmjs.com/package/@asgardeo/auth-react

Go inside this sample prject (main branch) in below folder reactatx-samples/react-sample/src/pages/main.jsx and modify accordingly

#### Install react SDK from npm registry.

```
npm install @asgardeo/auth-react --save
```


### Main.jsx
--------
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
