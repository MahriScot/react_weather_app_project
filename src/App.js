import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <p>There's no such thing as bad weather, only bad clothing</p>
        <Weather defaultCity="Edinburgh" />
        <footer>
          This project was coded by{" "}
          <a href="https://steady-youtiao-11dde2.netlify.app" target="_blank">
            Mahri Stewart
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/MahriScot/react_weather_app_project"
            target="_blank"
          >
            open-sourced on GitHub
          </a>{" "}
          and hosted on{" "}
          <a href="https://velvety-praline-d736cc.netlify.app" target="_blank">
            Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
