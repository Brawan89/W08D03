const express = require("express");
const app = express();
app.use(express.json());
require("dotenv").config();
const cors = require("cors");
app.use(cors());


require("./db");


//role
const roleRouter = require("./Routers/Routes/role");
app.use(roleRouter);

//user
const userRouter = require("./Routers/Routes/user");
app.use(userRouter);

//task
const taskRouter = require("./Routers/Routes/task");
app.use(taskRouter);


const PORT = process.env.PORT || 4000;
app.listen(PORT , () => {
    console.log(`Server run on ${PORT}`);
})