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
        case "GET":
            await getOrders(req, res);
            break;
    }
}

const sold = async (id, quantity, oldInStock, oldStock) => {
    await Products.findOneAndUpdate({ _id: id }, {
        inStock: oldInStock - quantity,
        sold: quantity + oldSold
    })
}

const getOrders = async (req, res) => {
    try {
const result = await auth()
    } catch (err) {
        return res.status(500).json({ err: err.message })
    }
}

const createOrder = async (req, res) => {
    try {
        const result = await auth(req, res);
        const { address, mobile, cart, total } = req.body;

        const newOrder = new Orders({
            user: result.id, address, mobile, cart, total

        });

        cart.filter(item => {
            return sold(item._id, item.quantity, item.inStock, item.sold)
        })

        await newOrder.save();

        res.json({
            msg: 'Payment success! We will contact you to confirm the order',
            newOrder
        })
    } catch (err) {
        return res.status(500).json({ err: err.message })
    }
}

export default connect;