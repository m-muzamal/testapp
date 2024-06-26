const express = require("express");
require("dotenv").config();
const cors = require("cors");

const app = express();

app.use(cors());
app.options("*", cors());

const data = [
  {
    id: 1,
    name: "Muhammad Muzammal",
  },
  {
    id: 2,
    name: "Awais Shafiq",
  },
  {
    id: 3,
    name: "Muhammad Saad",
  },
  {
    id: 4,
    name: "Huzaifa Shafiq",
  },
  {
    id: 5,
    name: "Muhammad Ali",
  },
  {
    id:6,
    name:"New User"
  }
];


app.use("/", (req, res) => {
  res.status(200).json(data);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App is runnig on port ${port}`);
});
