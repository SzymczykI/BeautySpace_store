import mongoose from 'mongoose'

const connectToDB = () => {
    if(mongoose.connections[0].readyState){
        console.log('already connected');
        return;
    }
    mongoose.connect(process.env.MONGODB_URL, {
        useCreateIndex: true,
        useFindAndModify: false,
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, err => {
        if(err) throw err;
        console.log('Connected to db')
    })
}

export default connectToDB