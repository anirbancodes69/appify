require("dotenv").config({ path: "./config.env" });

const morgan = require("morgan");

const tourRouter = require("./routes/tourRoutes");
const userRouter = require("./routes/userRoutes");

const express = require("express");
const app = express();

// if (process.env.NODE_ENV === "dev") {
//   app.use(morgan("dev"));
// }

app.use(express.json());

app.use(express.static("./public"));

app.use((req, res, next) => {
  console.log("Hello from global middleware!");
  next();
});

app.use("/api/v1/tours", tourRouter);
app.use("/api/v1/users", userRouter);

module.exports = app;
