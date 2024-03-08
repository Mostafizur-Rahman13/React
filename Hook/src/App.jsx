import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [counter, SetCount] = useState(0);

  const AddedValue = () => {
    if (counter === 6) {
    } else {
      SetCount(counter + 1);
    }
  };

  const RemoveValue = () => {
    if (counter === 0) {
    } else {
      SetCount(counter - 1);
    }
  };

  return (
    <>
      <button onClick={AddedValue}> Added Value</button>
      <h1>h1 hook number count {counter}</h1>
      <button onClick={RemoveValue}>Remove Value</button>
      <h2>h2 hook number count {counter}</h2>
      <p>Para hook number count {counter}</p>
    </>
  );
}

export default App;
