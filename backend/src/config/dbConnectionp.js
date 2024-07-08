const mongoose =require("mongoose");

function connectMongoDb(url){
   try{
    mongoose.connect(url);
    console.log("Connected to MongoDB");
   }
   catch(error){
    console.log("Error connecting to MongoDB:", error);
   }
}
module.exports= connectMongoDb