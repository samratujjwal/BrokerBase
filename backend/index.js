require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const PORT = process.env.PORT || 3002;
const url = process.env.MONGO_URL;

const { HoldingsModel } = require("./model/HoldingsModel.js");
const { OrdersModel } = require("./model/OrdersModel.js");
const { PositionsModel } = require("./model/PositionsModel");
const { WatchlistModel } = require("./model/WatchlistModel");

const app = express();
app.set("trust proxy", 1);

app.use(
  cors({
    origin: [
      "https://69787aa8e1f8300008d68a5d--brokerbase.netlify.app",
      "https://69787e5c197b2bc56a00f7be--brokerbasedashboard.netlify.app",
      "http://localhost:3001",
      "https://brokerbase-dehq3m8ne-samratujjwals-projects.vercel.app",
      "https://broker-base-c4eqbfbl5-samratujjwals-projects.vercel.app",
      
    ],
    methods: ["GET", "POST", "OPTIONS"],
    credentials: true,
  }),
);
app.use(bodyParser.json());
const cookieParser = require("cookie-parser");
const authRoute = require("./routes/AuthRoute");

app.get("/allHoldings", async (req, res) => {
  let allHoldings = await HoldingsModel.find({});
  res.json(allHoldings);
});

app.get("/allPositions", async (req, res) => {
  let allPositions = await PositionsModel.find({});
  res.json(allPositions);
});
app.get("/allOrders", async (req, res) => {
  let allOrders = await OrdersModel.find({});
  res.json(allOrders);
});
app.get("/allWatchlist", async (req, res) => {
  let allWatchlist = await WatchlistModel.find({});
  res.json(allWatchlist);
});

app.post("/newOrder", async (req, res) => {
  let newOrder = new OrdersModel({
    name: req.body.name,
    qty: req.body.qty,
    price: req.body.price,
    mode: req.body.mode,
  });
  newOrder.save();
  res.send("Order Saved !");
});

app.use(cookieParser());

app.use(express.json());

app.use("/", authRoute);
app.listen(PORT, () => {
  console.log("App Listening on Port 3002");
  mongoose.connect(url);
  console.log("Connected to DB !");
});
