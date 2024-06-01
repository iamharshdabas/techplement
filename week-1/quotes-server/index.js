const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB Atlas");
});

const quoteSchema = new mongoose.Schema({
  quote: String,
  author: String,
});

const Quote = mongoose.model("Quote", quoteSchema);

app.get("/api/quote/random", async (req, res) => {
  try {
    const count = await Quote.countDocuments();
    const randomIndex = Math.floor(Math.random() * count);
    const randomQuote = await Quote.findOne().skip(randomIndex);
    res.json(randomQuote);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.get("/api/quotes/:author", async (req, res) => {
  try {
    const quotes = await Quote.find({ author: req.params.author });
    res.json(quotes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.get("/api/authors", async (req, res) => {
  try {
    const authors = await Quote.distinct("author");
    res.json(authors);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
