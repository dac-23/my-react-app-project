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

  // Member Funcn
  let changeTitle = () => {
    let newTitle = "Hi " + title;

    // re-render; asking the REact, to perform DOM operation
    setTitle(newTitle);
  };

  return (
    <div>
      <h1>{title}</h1>
      <input type="button" value="Change the Title" onClick={changeTitle} />
    </div>
  );
}

export default App;
