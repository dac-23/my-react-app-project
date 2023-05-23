import { useState } from "react";

function App() {
  return (
    <div>
      <EventDemo />
    </div>
  );
}

function EventDemo() {
  // let counter = 100;
  let [counter, setCounter] = useState(100);

  let likeMe = () => {
    counter = counter + 1;

    // PERFORM DOM OPERATION
    setCounter(counter);
  };

  return (
    <div>
      <h1>Like</h1>

      <h1>{counter}</h1>

      <input type="button" value="Like Me" onClick={likeMe} />
    </div>
  );
}

export default App;
