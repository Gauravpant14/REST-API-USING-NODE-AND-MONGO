const mongoose = require("mongoose");
const schemaEx = new mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: Number,
      required: true,
    },
    address: String,
    phone: Number,
    gender: String,
    country: String,
    state: String,
  })

  const ModelEx = new mongoose.model("ModelEx", schemaEx);

  module.exports = ModelEx;