const mongoose = require("mongoose")
const DB_STR =
"mongodb+srv://aahirwar251:Ahirwar@cluster1.fhz3pps.mongodb.net/?retryWrites=true&w=majority"; 
// "mongodb+srv://aahirwar:aahirwar@cluster0.ofdeiew.mongodb.net/?retryWrites=true&w=majority"; 
mongoose
    .connect(DB_STR,{useNewUrlParser: true,useUnifiedTopology:true})
    .then(()=>console.log("Database connected")) 
    .catch((err)=>console.error("Database connection error:", err));

    // app.listen(port,()=>{
    //     console.log(`example app listeing on port...${port}`);
    // });

const newSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const collection  = mongoose.model("collection",newSchema)

module.export = collection

export default newSchema