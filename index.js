const express = require("express");
const app = express();
require("dotenv").config();

require("./db")


const PORT = process.env.PORT || 4000;
app.listen(PORT , () => {
    console.log(`Server run on ${PORT}`);
})