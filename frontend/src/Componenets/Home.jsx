import React from "react";
import { useCallback, useEffect, useMemo, useState } from "react";
import reactLogo from "../assets/react.svg";
import viteLogo from "/vite.svg";
import "../App.css";
import Users from "./Users";
import Chart from "./Chart";
import { data } from "../dummyData/ChartData";
import { user } from "../dummyData/user";
import { useDebounse } from "../hooks/useDebounce";
import { useThrottle } from  "../hooks/useThrottle";
import MyResponsiveLineChart from "./NivoChart";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../Redux/Products/productSlice";
import About from "./About";
import { decrement, increment } from "../Redux/Counter/counterSlice";

const Home = () => {
  const count = useSelector((state) => state.counter.value);
  const [userData, serUserData] = useState(user);
  const [search, setSearch] = useState("");
  const debounceValue = useDebounse(search); // coustom hook
  const throttleValue = useThrottle(search); //  coustom hook
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const dispatch = useDispatch();
  const prod = useSelector((state) => state.products.items);
  const status = useSelector((state) => state.products.status);
  const error = useSelector((state) => state.products.erroe);
 
  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProducts());
    }
  }, [fetchProducts]);

  // console.log(throttleValue, "Throttling");
  // console.log(debounceValue, "Debouncing");

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  // useMemo
  useMemo(() => {
    serUserData(
      user.filter((item) =>
        item.name.toLowerCase().includes(debounceValue?.toLowerCase())
      )
    );
  }, [debounceValue]);

  const handleMouseMove = (e) => {
    // console.log("moving");
    setPosition({
      x: e.clientX,
      y: e.clientY,
    });
  };

  // useCallback
  const func = useCallback(() => {
    console.log("function");
  }, []);

  console.log('component')
  return (
    <>
      <div className="app home-section" onMouseMove={handleMouseMove}>
        {/* useRef  */}
        <div
          className="circle"
          style={{
            left: `${position.x - 30}px`,
            top: `${position.y - 30}px`,
          }}
        ></div>

        {/* form handling */}
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

        {/* list users  */}
        <div className="users">
          {userData?.map((user) => (
            <p className="user" key={user.id}>
              {user.name}
            </p>
          ))}
        </div>

        {/* logos  */}
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
          {/* counter  */}
          <div className="counter">
            <p
              className="value"
              style={{
                color: count < 0 ? "red" : count === 0 ? "#646cffaa" : "white",
              }}
            >
              {count}
            </p>
            <button
              onClick={() => dispatch(increment())}
              className="counterBtn left"
            >
              +
            </button>
            <button
              onClick={() => dispatch(decrement())}
              className="counterBtn right"
            >
              -
            </button>
          </div>

          {/* backend users  */}
          <div className="users">
            <Users />
          </div>

          {/* <Chart/> */}
        </div>

        {/* <div style={{ height: "500px", width: "100%" }}>
    <MyResponsiveLineChart data={data} />
  </div> */}
      </div>

      {/* store  */}
      <section className="product-section">
        <h1>Store</h1>
        <div className="content">
          {prod.map((prod, index) => (
            <div key={index} className="prod">
              <div className="img">
                <img src={prod.image} alt="" />
              </div>
              <h3>{prod.title.slice(0, 15)}...</h3>
              <p></p>
              <p>
                Price: <span>{prod.price}$</span>
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* about */}
      <About func={func} />
    </>
  );
};

export default Home;
