import React, { useState, useEffect } from "react";
import "./App.css";
import main from "../src/images/main1.png";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import ExpenseTrackerApp from "./components/exp_tracker/ExpenseTracker";
import QuizApp from "./components/quiz_app/QuizApp";

function App() {
  const [rowId, setRowId] = useState(0);

  useEffect(() => {
    if (rowId === 0) {
      console.log("Component loaded!");
    } else {
      console.log("Button was clicked!");
    }
  }, [rowId]);

  function clickExpenseTracker() {
    setRowId(1);
    //if (rowId === 1) {
    console.log("expense");
    return <ExpenseTrackerApp />;
    //}
  }

  function clickQuiz() {
    setRowId(2);
    //if (rowId === 2) {
    console.log("quiz");
    return <QuizApp />;
    //}
  }

  return (
    <div>
      <Header />
      <main className="container">
        <section className="hero container">
          <h3>Expense Tracker & Quiz App</h3>
          <p>
            Bootcamp 2020 Project 7A: Rebuild the Expense Tracker App and Quiz
            App with React/TypeScript it should be a Progressive Web App (PWA)
            with Offline Capability and Push Notifications
          </p>
          {/* <a href="#">Expense Tracker App</a> <a href="#">Quiz App</a> */}
          <button onClick={clickExpenseTracker}>Exp. Tracker App</button>{" "}
          <button onClick={clickQuiz}>Quiz App</button>
        </section>
        <div className="device">
          <figure>
            <img src={main} alt="The Exp and Quiz App" />
          </figure>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
