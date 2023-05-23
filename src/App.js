import { useState, useRef } from "react";

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
  let inputRef = useRef();
  let [list, setList] = useState(["todo1"]);

  // Member Funcn
  let addNewItem = () => {
    console.log(inputRef.current);

    let newValue = inputRef.current.value;
    setList([newValue, ...list]);

    inputRef.current.value = "";
  };

  // UI
  return (
    <div>
      <h1>List Demo </h1>

      <input type="text" placeholder="Enter Todo" ref={inputRef} />
      <input type="button" value="Add new Item" onClick={addNewItem} />

      <hr />
      {list.map((item) => (
        <h1>{item}</h1>
      ))}
    </div>
  );
}

export default App;
