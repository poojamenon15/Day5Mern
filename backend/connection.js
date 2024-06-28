//establishing connection to DB

const mongoose = require('mongoose')
mongoose.connect("mongodb+srv://poojamenon15:poojamenon@cluster0.haiibzm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
    console.log("Connected to DB")
})
.catch((error)=>{
    console.log(error)
})