const mongoose = require("mongoose");
const app = require("./app");
const db = "mongodb://localhost:27017/appify";
mongoose
  .connect(db, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false,
  })
  .then(() => console.log("DB Connected Successfully!"));

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Listing on Port: ${port}`);
});
