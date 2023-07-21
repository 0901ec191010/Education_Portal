const express = require("express")  
const collection = require("./mongo")
const cors = require("cors")
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())   
const port = 3000;


app.get("/",cors(),(req,res)=>{

}) 

app.post("/",async(req,res)=>{
    // eslint-disable-next-line no-unused-vars
    const{email,password}= req.body

    // const data1={
    //     email:email,
    //     password:password
    // }
    try {
        const check = await collection.findOne({email:email})
        if (check) {
            res.json("exist")
        }else{
            res.json("not exist")
        }
    } catch (e) {
        res.json("not exist")
        
    }
})
app.get("/",cors(),(req,res)=>{

}) 

app.post("/signup",async(req,res)=>{
    const{email,password}= req.body

    const data={
        email:email,
        password:password
    }
    try {
        const check = await collection.findOne({email:email})
        if (check) {
            res.json("exist")
        }else{
            res.json("not exist")
            await collection.insertMany({data})
        }
    } catch (e) {
        res.json("not exist")
        
    }
})

app.listen(3000,()=>{
    console.log(`port is running ${port}`)
})