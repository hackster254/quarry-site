const mongoose = require('mongoose');

const connect3DB = async () => {
    try{
        // mongodb connection string
        

        const con3 = await mongoose.createConnection(process.env.MONGO_URI3, {
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

module.exports = connect3DB