const { urlencoded } = require("express");
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv/config");

// Port
const PORT = process.env.PORT || 3001;

app.use("/uploads", express.static("uploads"));
//middleware
app.use(cors());
app.use(bodyParser.json());
app.use(urlencoded({ extended: true }));
//Route
const heroesRoute = require("./routes/heroes");

app.use("/api/heroes", heroesRoute);

// conect mongoDB
mongoose.connect(
  process.env.DB_CONNECTION,
  {
    useNewUrlParser: true,
  },
  () => console.log("conect DB")
);

app.listen(PORT, () => {
  console.log(`Server starting on port ${PORT}`);
});
