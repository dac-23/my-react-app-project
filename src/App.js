import { useState } from "react";

function App() {
  return (
    <div>
      <EventDemo />
    </div>
  );
}

function EventDemo() {
  // DATA MEMBER :: Stateless or Stateful
  // let background = "bg-primary";
  let [background, setBackground] = useState("bg-primary");

  // MEMBER FUNCN
  let changeBackgroundPrimary = () => {
    let newbackground = "bg-primary";
    setBackground(newbackground);
  };

  let changeBackgroundSuccess = () => {
    let newbackground = "bg-success";
    setBackground(newbackground);
  };

  let changeBackgroundDanger = () => {
    let newbackground = "bg-danger";
    setBackground(newbackground);
  };

  // UI
  return (
    <div>
      <h1 className={`${background} text-light p-3`}>Event DEMO</h1>

      <input
        type="button"
        className="btn btn-primary"
        value="PRIMARY"
        onClick={changeBackgroundPrimary}
      />
      <input
        type="button"
        className="btn btn-success"
        value="SUCCESS"
        onClick={changeBackgroundSuccess}
      />
      <input
        type="button"
        className="btn btn-danger"
        value="DANGER"
        onClick={changeBackgroundDanger}
      />
    </div>
  );
}

export default App;
