import { useState, useEffect } from "react";

import "./App.css";

const App = () => {
  let [number, setNumber] = useState(10);

  function increaseNumber() {
    setNumber(number + 1);
    console.log("valor antes del nuevo render:" + number);
  }

  useEffect(() => {
    console.log("valor al actualizar el estado:" + number);
  });
  return (
    <>
      <button onClick={increaseNumber}>Next</button>
      <div>{number}</div>
    </>
  );
};

export default App;
