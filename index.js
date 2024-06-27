const express = require("express");
const dbconnection = require("./Models/mongodb");
const morgan = require("morgan");
const datacontrollers = require("./controllers/datacontrollers");
const cors = require('cors')



const app = express();
app.use(cors())
// middle wares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api", datacontrollers);

app.use(morgan("dev"))




//function to connect to database
dbconnection();
//port initiallizaation
app.listen(5098, () => {
  console.log("server is at 5098 runnig...");
});