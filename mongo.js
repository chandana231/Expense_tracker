const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/my-app", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error);
  });

const newSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  amount: {
    type: Number, // Change type to Number
    required: true
  },
  date: {
    type: Date,
    required: true
  }
});

const collection = mongoose.model("collection", newSchema);

module.exports = {
  connection: mongoose.connection,
  collection,
};