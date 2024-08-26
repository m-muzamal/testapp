import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Users from "./Componenets/Users";
import Chart from "./Componenets/Chart";

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("Somthing")
  const [edit, setEdit] = useState(true)

  const [input, setInput] = useState({
    name: "mzml",
    age: "12",
    job: "it",
  });

  const output = () => {
    console.log(input);
  };
  
  return (
    <>
    <input type="text" onChange={(e)=>setText(e.target.value)} readOnly={Boolean(edit)} placeholder="Try" value={text} />
      {input.job === "it" && <input type="text" placeholder="Name" />}
      <select name="job">
        <option value="it">it</option>
        <option value="cs">cs</option>
        <option value="bba">bba</option>
      </select>
      <button onClick={output}>Next</button>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite app</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <div className="users">
          <Users />
        </div>
        <Chart/>
      </div>
    </>
  );
}

export default App;
