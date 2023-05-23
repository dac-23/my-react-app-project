import { useState } from "react";

function App() {
  return (
    <div>
      <EventDemo />
    </div>
  );
}

// MAP OPERATOR
// <h1>Delhi</h1>
function EventDemo() {
  let list = ["Delhi", "Calcutta", "Kochi", "Mumbai"];

  return (
    <div>
      <h1>List Demo </h1>

      {list.map((item) => (
        <div className="alert alert-primary mb-1">{item}</div>
      ))}

      {/** ANY AS HEADLINE */}
      {list.map((item) => (
        <h1>{item}</h1>
      ))}

      {/** SIMPLE STING */}
      {list.map((item) => item)}
    </div>
  );
}

export default App;
