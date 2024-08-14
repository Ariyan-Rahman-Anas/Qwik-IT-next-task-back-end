const mongoose = require("mongoose")

function dbConfig() {
    mongoose.connect(`${process.env.DB_URI}`)
        .then(() => console.log("MongoDB is connected!"))
    .catch((err)=>console.log(`MongoDB connecting error is: ${err}`))
}

module.exports = dbConfig