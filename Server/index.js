const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./config/dbConfig");
const { USER } = require("./models/model");
require("dotenv").config();
const router = require("./routes");

const PORT = process.env.PORT || 5000;

// middlewares
app.use(express.json());
app.use(router)
app.use(cors());

const startApp = async () => {
  pool.getConnection();
  console.log("Database Connected Succefully");
  try {
    app.listen(PORT, () => {
      console.log(`server running on port ${PORT}`);
    });
    pool.query(USER);
    console.log("all tables has been created");
  } catch (error) {
    console.log(error);
  }
};

startApp();
