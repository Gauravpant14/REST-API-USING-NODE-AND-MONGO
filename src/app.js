const express = require("express");
require("../src/db/conn");
const mongoData = require("../src/models/dataRecord");
const app = express();
const port = 3000;

app.use(express.json()); 

//GET

app.get("/users" ,async(req, res) => {
    try{
      const getData = await mongoData.find();
      res.send(getData);
    }
    catch(e){
    res.send(e);
    }
})


// app.post("/users", (req, res) => {
//   res.send("hello from server");
//   console.log(req.body);
//   const allData = new mongoData(req.body);
//   allData.save().then(() => {
//       res.status(201).send(user);
//   }).catch((e) => {
//       res.status(400).send(e);
//   })
// });

//POST

app.post("/users", async(req,res) => {
   try{
        const allData = new mongoData(req.body);
        const result  = await allData.save();
        res.status(201).send(result);
    }
    catch(e){
        res.status(400).send(e);
    }
})

app.listen(port, () => {
  console.log(`connection established at ${port} port`)
});
