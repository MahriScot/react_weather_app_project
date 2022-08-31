import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <p>
          <img src="images/raining.svg" alt="raining" width="60" /> There's no
          such thing as bad weather, only bad clothing{" "}
          <img src="images/walking.svg" alt="walking" width="60" />
        </p>

        <Weather defaultCity="Edinburgh" />
        <footer>
          <img src="images/terrain.png" alt="my_logo" width="20" /> This project
          was coded by{" "}
          <a
            href="https://steady-youtiao-11dde2.netlify.app"
            target="_blank"
            rel="noreferrer"
          >
            Mahri Stewart
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/MahriScot/react_weather_app_project"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on GitHub
          </a>{" "}
          and hosted on{" "}
          <a
            href="https://velvety-praline-d736cc.netlify.app"
            target="_blank"
            rel="noreferrer"
          >
            Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
