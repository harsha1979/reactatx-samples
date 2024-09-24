# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

##Lets start
--------------
Open using an editor

npm install
npm run dev

http://localhost:5173/

Register account in Asgardeo
https://asgardeo.io/signup?utm_source=console

Register React SPA application 
Redirect URL http://localhost:5173/

Go through the Asgardeo React SDK
https://www.npmjs.com/package/@asgardeo/auth-react

Go inside this sample prject (main branch) in below folder
reactatx-samples/react-sample/src/pages/main.jsx and modify accordingly

Main.jsx
--------

#const config = {
#  signInRedirectURL: "https://localhost:3000/sign-in",
#  signOutRedirectURL: "https://localhost:3000/dashboard",
#  clientID: "<client_ID>",
#  baseUrl: "https://api.asgardeo.io/t/<org_name>",
#  scope: ["openid", "profile"],
#};

<StrictMode>
#   <AuthProvider config={config}>
     <App />
#   </AuthProvider>
 </StrictMode>



