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
      <h2>Authenticated : {String(state?.isAuthenticated)}</h2>
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
