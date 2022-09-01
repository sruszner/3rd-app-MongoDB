
const mongoose = require('mongoose');
const {MONGO, MONGOATLAS} = require('../config/global');

exports.getConnection = async () =>{
    try {
        await mongoose.connect(MONGO, {
            useNewUrlParser: true, 
            useUnifiedTopology: true 
            //serverApi: ServerApiVersion.v1,
        });
        return 'Connection OK';
    } catch (error) {
        return 'Connection error';
    }
}