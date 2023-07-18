const mongoose = require("mongoose")

const dbCnx = async ()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("DB CONECTED");
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    dbCnx
}