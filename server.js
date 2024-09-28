const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
//const pdfsample = require('./pdf-samples');
const morgan = require('morgan');
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes.js");
const productRoutes = require("./routes/productRoutes.js");
const userRoutes = require("./routes/userRoutes.js");

//configure env
dotenv.config();
//database config
connectDB();
//rest object
const app = express();
const PORT = process.env.PORT || 8080;

//Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

//routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/product", productRoutes);
app.use("/api/v1/user", userRoutes);

//rest api
app.get("/", (req, res) => {
    res.send("<h1>Welcome to Resume Builder App </h1>");
});

//app.get('/fetch-pdf', (req,res)=> {
//res.sendFile(`${__dirname}/Resume.pdf`);
//});

//app.use(express.static("../client/build"));

//Port and server setup
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});
