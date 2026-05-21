const express = require("express");

const connectDB = require("./config/db");

const productRoutes = require("./routes/productRoutes");

const authRoutes = require("./routes/authRoutes");
const userRoutes = require('./routes/userRoutes');
const app = express();

connectDB();

app.use(express.json());

app.use("/products", productRoutes);

app.use("/auth", authRoutes);
app.use('/api/users', userRoutes);

app.get("/", (req, res) => {
    res.send("Server Running");
});

app.listen(5000, () => {
    console.log("Server Started");
});