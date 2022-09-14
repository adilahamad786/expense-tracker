import React from "react";
import Expenses from "./components/Expenses/Expenses";

function App() {
  
  return (
      <div>
        <h2>Let's get started!</h2>
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
