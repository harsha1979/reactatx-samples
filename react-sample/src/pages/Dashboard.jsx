import reactLogo from "../assets/react.svg";
import viteLogo from "/vite.svg";
import capitalFac from "../assets/cap.png";
import asgardeo from "../assets/asgardeo.png";
import "../App.css";
import { useAuthContext } from "@asgardeo/auth-react";
import { useEffect } from "react";
import { useState } from "react";

function Dashboard() {
  const [name, setName] = useState("Unknown");
  const [roles, setRoles] = useState("Unknown");
  const { state, signOut, getDecodedIDToken, httpRequest } = useAuthContext();
  const [resource, setResource] = useState("");

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

  const dataRetrieve = () => {
    const reqConfig = {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "GET",
      url: "https://jsonplaceholder.typicode.com/todos/1",
      attachToken: false,
    };

    httpRequest(reqConfig)
      .then((response) => {
        console.log("Data retrieved successfully", response);
        setResource(JSON.stringify(response.data));
      })
      .catch((error) => {
        console.error("Error while getting the data", error);
      });
  };

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

      <div className="card">
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
        <h1>User Dashboard</h1>
        <h2>Username : {state?.username}</h2>
        <h2>Authenticated : {String(state?.isAuthenticated)}</h2>
        <h2>Roles : {Array(roles).join()}</h2>
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
      <div className="card">
        <input
          type="button"
          value="Access Resource"
          className="button"
          onClick={dataRetrieve}
        />
      </div>
      <div>{resource}</div>
    </div>
  );
}

export default Dashboard;
