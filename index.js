const express = require("express");
const app = express();
app.use(express.json());
require("dotenv").config();

require("./db");

//user
const userRouter = require("./Routers/Routes/user");
app.use(userRouter);


const PORT = process.env.PORT || 4000;
app.listen(PORT , () => {
    console.log(`Server run on ${PORT}`);
})