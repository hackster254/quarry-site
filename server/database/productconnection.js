const mongoose = require('mongoose');

const connect2DB = async () => {
    try{
        // mongodb connection string
        

        const con2 = await mongoose.createConnection(process.env.MONGO_URI2, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        })

        //console.log(`MongoDB connected : ${con2.connection.host}`);
    }catch(err){
        console.log(err);
        process.exit(1);
    }
}

module.exports = connect2DB