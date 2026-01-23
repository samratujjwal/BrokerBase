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
app.set('trust proxy', 1);
//app.use(cors());
app.use(cors({
    origin: ['https://brokerbase-97bb5.web.app', 'http://localhost:3000', 'http://localhost:3001', "*"],
    methods: ['GET', 'POST', 'OPTIONS'],
    credentials: true
}));
app.use(bodyParser.json());
const cookieParser = require("cookie-parser");
const authRoute = require("./routes/AuthRoute");
// app.get("/addHoldings", async (req, res) => {
//     let tempHoldings = [
//         {
//             name: "WIPRO",
//             qty: 4,
//             avg: 489.3,
//             price: 577.75,
//             net: "+18.08%",
//             day: "+0.32%",
//         },
//     ];

//     tempHoldings.forEach((item) => {
//         let newHolding = new HoldingsModel({
//             name: item.name,
//             qty: item.qty,
//             avg: item.avg,
//             price: item.price,
//             net: item.net,
//             day: item.day,
//             isLoss: item.isLoss,
//         });
//         newHolding.save();
//     })
//     res.send("Done!");
// })

// app.get("/addOrders", async (req, res) => {
//     let tempOrders = [
//         {
//             name: "Ujjwal Maurya",
//             qty: 100,
//             price: 1271,
//             mode: "Buy"
//         },
//         {
//             name: "Mahi Maurya",
//             qty: 155,
//             price: 900.25,
//             mode: "Buy"
//         },
//         {
//             name: "Khodhar Kumar",
//             qty: 1000,
//             price: 5000,
//             mode: "Sell"
//         },
//     ];
//     tempOrders.forEach((order) => {
//         let newOrder = new OrdersModel({
//             name: order.name,
//             qty: order.qty,
//             price: order.price,
//             mode: order.mode
//         });
//         newOrder.save();
//     });

//     res.send("Orders Added!")
// });

// app.get("/addPositions", async (req, res) => {
//     let tempPositions = [
//         {
//             product: "CNC",
//             name: "EVEREADY",
//             qty: 2,
//             avg: 316.27,
//             price: 312.35,
//             net: "+0.58%",
//             day: "-1.24%",
//             isLoss: true,
//         },
//         {
//             product: "CNC",
//             name: "JUBLFOOD",
//             qty: 1,
//             avg: 3124.75,
//             price: 3082.65,
//             net: "+10.04%",
//             day: "-1.35%",
//             isLoss: true,
//         },
//     ];

//     tempPositions.forEach((item) => {
//         let newPosition = new PositionsModel({
//             product: item.product,
//             name: item.name,
//             qty: item.qty,
//             avg: item.avg,
//             price: item.price,
//             net: item.net,
//             day: item.day,
//             isLoss: item.isLoss,
//         });
//         newPosition.save();
//     })
//     res.send("Positions Added !");
// })

// app.get("/addWatchlist", async (req, res) => {
//     const tempwatchlist = [
//         { name: "INFY", price: 1555.45, percent: "-1.60%", isDown: true },
//         { name: "ONGC", price: 116.8, percent: "-0.09%", isDown: true },
//         { name: "TCS", price: 3194.8, percent: "-0.25%", isDown: true },
//     ];

//     tempwatchlist.forEach((item) => {
//         let newWatchlistItem = new WatchlistModel({
//             name: item.name,
//             price: item.price,
//             percent: item.percent,
//             isDown: item.isDown,
//         })

//         newWatchlistItem.save();
//     });
//     res.send("Watchlist Added!");
// });
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
    //console.log(req.body);
    let newOrder = new OrdersModel({
        name: req.body.name,
        qty: req.body.qty,
        price: req.body.price,
        mode: req.body.mode
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
    console.log("Connected to DB !")
})