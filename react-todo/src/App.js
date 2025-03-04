import "./styles.css";
import { useState } from "react";

data = ["", "", "", "", ""];
export default function App() {
  return (
    <div className="App">
      <h1>React To-Do List</h1>
      <List data={data} />
    </div>
  );
}

function Tick() {
  const [tick, setTick] = useState(false);

  function handleClick() {
    setTick(!tick);
  }
  return (
    <>
      <button onClick={handleClick}>
        {tick ? <>&#9989;</> : <>&#10006;</>}
      </button>
    </>
  );
}

function List(props) {
  return (
    <>
      <ul>
        {props.data.map((item) => (
          <li>
            <TodoInput />
            <Tick />
          </li>
        ))}
      </ul>
    </>
  );
}

function TodoInput() {
  return (
    <>
      <input type="textarea" />
    </>
  );
}
