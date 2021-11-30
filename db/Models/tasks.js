const mongoose = require("mongoose");

const task = new mongoose.Schema({
    name: { type: String , required: true },
    isDel: { default: false },
});

module.exports = mongoose.model("Task" , task);