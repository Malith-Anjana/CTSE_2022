require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./db");
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");

// database connection
connection();

// middlewares
app.use(express.json());
app.use(cors());

// routes
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);

const port = 3000;
app.listen(port, console.log(`Listening on port ${port}...`));

app.get('/', (req,res)=>{
    res.send("Authentication Service running on google platform")
})
