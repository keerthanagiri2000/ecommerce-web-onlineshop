require('dotenv').config();
const mongoose = require ('mongoose');


const connectionStr = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@cluster0.1tstg.mongodb.net/ecompro1?retryWrites=true&w=majority`;

mongoose.connect(connectionStr, {useNewUrlParser: true})
.then(() => console.log('Mongo is connected'))
.catch(err => console.log(err)) 

mongoose.connection.on('error', err => {
    console.log(err)
})

