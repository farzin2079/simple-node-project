const mongoose= require("mongoose");
const schema = mongoose.Schema;


const  Flight = mongoose.model('Flight' , new schema({
   origin:{
    type: String,
    required: true
   },
   destination:{
    type: String,
    required:true
   },
   takeOff:{
      type:String,
      required:true
   }
}, { timestamps: true})
);

module.exports = Flight;