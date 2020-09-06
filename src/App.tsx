import React from "react";
import "./App.css";
import logo from "../src/images/logo3-transparent.png";
import main from "../src/images/main1.png";
//import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ExpenseTrackerApp from "./components/exp_tracker/exp_tracker";
import QuizApp from "./components/quiz_app/quiz_app";

function App() {
  function clickExpenseTracker() {
    return <ExpenseTrackerApp />;
  }
  function clickQuiz() {
    return <QuizApp />;
  }

  return (
    <div>
      <header className="container">
        <div className="logo">
          <img
            src={logo}
            className="App-logo"
            alt="diagram"
            width="150px"
            height="150px"
          />
        </div>

        <nav>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Bootcamp 2020</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
            <li className="highlight">
              <a href="#">About us</a>
            </li>
          </ul>
        </nav>
      </header>
      <main className="container">
        <section className="hero container">
          <h1>Expense Tracker & Quiz App</h1>
          <p>
            Bootcamp 2020 Project 7A: Rebuild the Expense Tracker App and Quiz
            App with React/TypeScript it should be a Progressive Web App (PWA)
            with Offline Capability and Push Notifications
          </p>
          {/* <a href="#">Expense Tracker App</a> <a href="#">Quiz App</a> */}
          <button onClick={clickExpenseTracker}>
            Expense Tracker App
          </button>{" "}
          <button onClick={clickQuiz}>Quiz App</button>
        </section>
        <div className="device">
          <figure>
            <img src={main} alt="The Exp and Quiz App" />
          </figure>
        </div>
      </main>
    </div>
  );
}

export default App;
