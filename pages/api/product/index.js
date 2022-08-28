import connectToDB from "../../../utils/connectDB";
import Products from '../../../models/productModel'

connectToDB();

const takeData = async (req, res) => {
    switch (req.method) {
        case "GET":
            await getProducts(req, res)
            break;
    }
}

const getProducts = async (req, res) => {
    try {
        const products = await Products.find();
        res.json({
            status: 'success',
            result: products.length,
            products
        })
    } catch (err) {
        return res.status(500).json({ err: 'err.message' })
    }
}

export default takeData;