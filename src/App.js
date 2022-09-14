import React from "react";
import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

function App() {
  
  return (
      <div>
        <NewExpense/>
        <Expenses/>
      </div>
  );

  // // Internally React work..
  // return React.createElement(
  //   "div",
  //   {},
  //   React.createElement("h2", {}, "Let's get started!"),
  //   React.createElement(Expenses)
  // );
}

export default App;
