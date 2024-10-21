const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
const mongoose = require("mongoose");
app.use(cors());
const port = 8888;
require("./config/dbConfig");
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello From Server Side");
});


const Item = mongoose.model(
  "Item",
  new mongoose.Schema({ name: String, price: Number })
);

app.use(express.json());

app.post("/createItems", async (req, res) => {
  const item = new Item(req.body);
  await item.save();
  res.send(item);
});

app.get("/GetItems", async (req, res) => {
  const items = await Item.find();
  res.send(items);
});

app.put("/updateItems/:id", async (req, res) => {
  const item = await Item.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.send(item);
});

app.delete("/deleteItems/:id", async (req, res) => {
  await Item.findByIdAndDelete(req.params.id);
  res.send({ message: "Item deleted" });
});

app.listen(port, () => {
  console.log("server running on ", port);
});
