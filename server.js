const mongoose = require("mongoose");
const app = require("./app");
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
    app.listen(port, () => {
      console.log(`Listing on Port: ${port}`);
    });
  });

const port = process.env.PORT || 3000;
