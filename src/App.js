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
  let [list, setList] = useState(["delhi", "chennai"]);

  // Member Funcn
  let addNewItem = () => {
    // let newList = [...list, "kochi"];
    let newList = ["kochi", ...list];
    setList(newList);
  };

  return (
    <div>
      <h1>List Demo </h1>
      <input type="button" value="Add new Item" onClick={addNewItem} />

      <hr />
      {list.map((item) => (
        <h1>{item}</h1>
      ))}
    </div>
  );
}

export default App;
