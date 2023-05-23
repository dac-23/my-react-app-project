import { useState } from "react";

function App() {
  return (
    <div>
      <EventDemo />
    </div>
  );
}

function EventDemo() {
  // delcaring and destructing the stateful variable
  // let title = "Hello World";
  let [title, setTitle] = useState("Hello World");

  return (
    <div>
      <h1>{title}</h1>
    </div>
  );
}

export default App;
