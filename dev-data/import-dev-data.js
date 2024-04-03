require("dotenv").config({ path: "./config.env" });
const fs = require("fs");
const mongoose = require("mongoose");
const Tour = require("./../models/tourModel");
const db = process.env.DATABASE_UBUNTU1;

mongoose
  .connect(db, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB Connected Successfully!");
  });

const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/tour-simple.json`, "utf-8")
);

console.log(process.argv[2]);

const importData = async () => {
  try {
    await Tour.create(tours);
    console.log("Data uploaded successfully");
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

const deleteData = async () => {
  try {
    await Tour.deleteMany();
    console.log("Data deleted successfully");
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

if (process.argv[2] === "--import") {
  importData();
} else if (process.argv[2] === "--delete") {
  deleteData();
}
