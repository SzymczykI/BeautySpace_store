import connectToDB from "../../../utils/connectDB";
import Users from '../../../models/userModel';
import auth from '../../../middleware/auth';

connectToDB()

const upload = async (req, res) => {
    switch (req.method) {
        case "PATCH":
            await uploadInfo(req, res)
            break;
    }
}

const uploadInfo = async (req, res) => {
    try {
        const result = await auth(req, res);
        const { name, avatar } = req.body;

        const newUser = await Users.findOneAndUpdate({ _id: result.id }, { name, avatar });

        res.json({
            msg: "Update Success!",
            user: {
                name,
                avatar,
                email: newUser.email,
                role: newUser.role
            }
        })
    } catch (err) {
        return res.status(500).json({ err: err.message })
    }
}

export default upload