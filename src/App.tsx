import React from "react";
import "./App.css";
import diagram from "../src/diagram1.jpg";

function App() {
  return (
    <div className="App">
      <h1>Expense Tracker & Quiz App</h1>
      <p>
        <strong>
          Bootcamp 2020 Project 7A: Rebuild the Expense Tracker App and Quiz App
          with React/TypeScript it should be a Progressive Web App (PWA) with
          Offline Capability and Push Notifications
        </strong>
      </p>
      <button>Expense Tracker App</button> <button>Quiz App</button>
      <br />
      <hr />
      <h4>Coming Soon!</h4>
      <img src={diagram} className="App-logo" alt="diagram" />
      <br />
      <br />
      <br />
      <hr />
      <h1>Ali Kamal</h1>
      <p>
        <strong>Full Stack Developer</strong>
      </p>
    </div>
  );
}

export default App;
