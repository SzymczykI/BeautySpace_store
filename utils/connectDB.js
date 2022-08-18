import mongoose from 'mongoose'
const uri = process.env.MONGODB_URL;

const connectToDB = () => {
    if (mongoose.connections[0].readyState) {
        console.log('already connected');
        return;
    }
    mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, err => {
        if (err) throw err;
        console.log('Connected to db')
    })
}

export default connectToDB