const mongoose = require("mongoose")

const dbConnect = () =>{
    const DB_URI = process.env.DB_URI;
    mongoose.connect(DB_URI)
    .catch( error => console.log("ha ocurrido un error", error));
};

//En node se necesita impotar el funcionamiento de esta funció
module.exports = dbConnect
