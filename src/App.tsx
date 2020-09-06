import React from "react";
import "./App.css";
import main from "../src/images/main1.png";
//import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/header/Header";
import ExpenseTrackerApp from "./components/exp_tracker/ExpenseTracker";
import QuizApp from "./components/quiz_app/QuizApp";

function App() {
  function clickExpenseTracker() {
    return <ExpenseTrackerApp />;
  }
  function clickQuiz() {
    return <QuizApp />;
  }

  return (
    <div>
      <Header />
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
