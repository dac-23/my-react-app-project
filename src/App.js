function App() {
  return (
    <div>
      <EventDemo />
    </div>
  );
}

function EventDemo() {
  // DATA MEMBER :: Stateless or Stateful
  let background = "bg-primary";

  // MEMBER FUNCN
  let changeBackgroundPrimary = () => {
    background = "bg-primary";
    alert(background);
  };

  let changeBackgroundSuccess = () => {
    background = "bg-success";
    alert(background);
  };

  let changeBackgroundDanger = () => {
    background = "bg-danger";
    alert(background);
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
