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
  let [todo, setTodo] = useState("");
  let [list, setList] = useState([]);

  let inputHandler = (e) => {
    console.log(e.target.value);
    let newValue = e.target.value;
    setTodo(newValue);
  };

  let addNewItem = () => {
    let newList = [todo, ...list];
    setList(newList);
    setTodo("");
  };

  // UI
  return (
    <div>
      <h1>List Demo </h1>

      <input
        type="text"
        placeholder="Enter Todo"
        value={todo}
        onChange={inputHandler}
      />
      <input type="button" value="Add New Item" onClick={addNewItem} />

      <hr />

      {list.map((item) => (
        <h1>{item}</h1>
      ))}
    </div>
  );
}

export default App;
