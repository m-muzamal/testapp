import { useEffect, useMemo, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Users from "./Componenets/Users";
import Chart from "./Componenets/Chart";
import { user } from "./dummyData/user";
import { useDebounse } from "./hooks/useDebounce";
import { useThrottle } from "./hooks/useThrottle";

function App() {
  const [count, setCount] = useState(0);
  const [userData, serUserData] = useState(user);
  const [search, setSearch] = useState("");
  const debounceValue = useDebounse(search);
  const throttleValue = useThrottle(search);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  // console.log(throttleValue, "Throttling");
  // console.log(debounceValue, "Debouncing");

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  useMemo(() => {
    console.log("filter");
    serUserData(
      user.filter((item) =>
        item.name.toLowerCase().includes(debounceValue?.toLowerCase())
      )
    );
  }, [debounceValue]);

  const handleMouseMove = (e) => {
    console.log("moving");
    setPosition({
      x: e.clientX,
      y: e.clientY,
    });
  };
  return (
    <div className="app" onMouseMove={handleMouseMove}>
      <div
        className="circle"
        style={{
          left: `${position.x - 30}px`,
          top: `${position.y - 130}px`,
        }}
      ></div>
      <input
        type="text"
        placeholder="Search user"
        value={search}
        onChange={handleChange}
        autoFocus
      />
      <p className="user" style={{ color: userData?.length === 0 && "red" }}>
        Total users: {userData?.length}
      </p>
      <div className="users">
        {userData?.map((user) => (
          <p className="user" key={user.id}>
            {user.name}
          </p>
        ))}
      </div>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite app</h1>

      {/* chart  */}
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <div className="users">
          <Users />
        </div>
        {/* <Chart/> */}
      </div>
    </div>
  );
}

export default App;
