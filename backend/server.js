const express = require("express");

const connectDB = require("./config/db");

const productRoutes = require("./routes/productRoutes");

const authRoutes = require("./routes/authRoutes");

const app = express();

connectDB();

app.use(express.json());

app.use("/products", productRoutes);

app.use("/auth", authRoutes);

app.get("/", (req, res) => {
    res.send("Server Running");
});

app.listen(5000, () => {
    console.log("Server Started");
});