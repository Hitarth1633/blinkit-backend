const Product = require("../models/Product");

const addProduct = async (req, res) => {

    try {

        const product = new Product(req.body);

        await product.save();

        res.json(product);

    } catch (error) {

        res.json(error);

    }

};

const getProducts = async (req, res) => {

    try {

        const products = await Product.find();

        res.json(products);

    } catch (error) {

        res.json(error);

    }

};

const deleteProduct = async (req, res) => {

    try {

        await Product.findByIdAndDelete(req.params.id);

        res.json({
            message: "Product Deleted"
        });

    } catch (error) {

        res.json(error);

    }

};
module.exports = {
    addProduct,
    getProducts,
    deleteProduct
};