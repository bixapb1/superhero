const mongoose = require("mongoose");

const HeroSchema = mongoose.Schema({
  nickname: {
    type: String,
    require: true,
  },
  real_name: {
    type: String,
    require: true,
  },
  origin_description: {
    type: String,
    require: true,
  },
  superpowers: {
    type: String,
    require: true,
  },
  catch_phrase: {
    type: String,
    require: true,
  },
  Images: {
    type: String,
  },
});

module.exports = mongoose.model("Hero", HeroSchema);
