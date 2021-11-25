const express = require("express");
const cors = require("cors");

const app = express();
const db = require("./models");

var corsOptions = { 
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

app.use('/users', require('./app/routes/users'));

//for dev , empty the database after re-run
// db.sequelize.authenticate() for not dropping the table after rerun , instead connect to the database
db.sequelize.sync({ force: true }).then(() => {
    console.log("Drop and re-sync db.");
});

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Soutrali !" });
});

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});