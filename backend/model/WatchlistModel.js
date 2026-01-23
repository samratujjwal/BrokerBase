const { model } = require("mongoose");

const { WatchlistSchema } = require("../schemas/WatchlistSchema.js")

const WatchlistModel = new model("watchlist", WatchlistSchema)

module.exports = { WatchlistModel };