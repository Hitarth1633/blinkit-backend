const authMiddleware = require("../middleware/authMiddleware");
const express = require("express");

const router = express.Router();

const {
    addProduct,
    getProducts,
    deleteProduct
} = require("../controllers/productController");

router.post("/add", addProduct);

router.get("/", getProducts);

router.delete("/:id", authMiddleware, deleteProduct);

module.exports = router;