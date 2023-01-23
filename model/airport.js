const mongoose= require("mongoose");
const schema = mongoose.Schema;

const Airport = mongoose.model('Airport' , new schema({
        name:{
            type: String,
            required:true
        },
        short:{
            type: String,
            required: true
        },
        city:{
            type: String,
            required:true
        }
    }, { timestamps: true})
);

module.exports = Airport;