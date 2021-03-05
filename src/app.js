const express = require("express");
require("../src/db/conn");
const mongoData = require("../src/models/dataRecord");
const app = express();
const port = 3000;

app.use(express.json()); 

app.get("/users", (req,res) => {
    res.send("reeta mam or sb theek thak");
})

app.post("/users", (req, res) => {
  res.send("hello from server");
  console.log(req.body);
  const allData = new mongoData(req.body);
  allData.save();
});

app.listen(port, () => {
  console.log(`connection established at ${port} port`);
});
