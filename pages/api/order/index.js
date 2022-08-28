import connectToDB from "../../../utils/connectDB";
import Orders from '../../../models/orderModel'
import auth from '../../../middleware/auth'
import Products from '../../../models/productModel'

connectToDB();

const connect = async () => {
    switch (req.method) {
        case "POST":
            await createOrder(req, res);
            break;
    }
}

const createOrder = async (req, res) => {
    try {
        const result = await auth(req, res);
        console.log(result)
    } catch (err) {
        return res.status(500).json({err: err.message})
    }
}

export default connect;