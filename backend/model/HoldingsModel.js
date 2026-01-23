const { model } = require("mongoose");

const { HoldingSchema } = require("../schemas/HoldingsSchema.js")

const HoldingsModel = new model("holding", HoldingSchema)

module.exports = { HoldingsModel };