import express from "express";

const Port = 4000;

const Api = express();

Api.use("/",express.static("src/View"))


<<<<<<< HEAD
Api.listen(Port,()=>{
    console.log("RUN in http://localhost:4000/#cadastro")
});
=======
Api.listen(Port);
>>>>>>> 9922b63b13b2d1288709d825b3ed4a4916fdcb48
