require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const { v4 } = require("uuid");

const port = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type"),
    res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});
//CRUD - GPPD (GET - READ, POST - CREATE, PUT/PATCH - UPDATING, D-DELETE)
//Request Comes with - Headers (Authentication & Authorization), Body, Query Parameters
// CORS (Cross Origin Resource Sharing) - Cross Origin Policy

mongoose.set("strictQuery", true);
const mongoDB = process.env.MONGODB_URI;

mongoose
  .connect(mongoDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });

const journalSchema = new mongoose.Schema({
  uid: String,
  title: String,
  date: Date,
  content: String,
});
const journalTable = mongoose.model("Journals", journalSchema);

app.post("/create-journal", async (req, res) => {
  const body = req.body;
  await journalTable.create({
    uid: v4(),
    content: body.content,
    title: body.title,
    date: body.date,
  });
  res.send("Journal created successfully");
});

app.get("/read-all-journal", async (req, res) => {
  const data = await journalTable.find();
  res.send(data);
}); //created route to get all journals

app.post("/update-journal", async (req, res) => {
  const { uid } = req.query;
  const body = req.body;
  await journalTable.updateOne({ uid: uid }, body);
  res.send("Journal updated successfully");
});

app.delete("/delete-journal", async (req, res) => {
  const { uid } = req.query;
  await journalTable.deleteOne({ uid: uid });
  res.send("Journal deleted successfully");
});

app.get("/read-journal-byId", async (req, res) => {
  const { uid } = req.query; // Extracts the query param from the link/endpoint
  const data = await journalTable.findOne({ uid: uid });
  res.send(data);
});

app.listen(port, () => {
  console.log(`Listening port on ${port}`);
});
