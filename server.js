
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const user_routes = require("./app/routes/user");

const app = express();

//Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) => res.send("Hello"));

//use routes
app.use("/api/", user_routes);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server is running on port ${port}`));