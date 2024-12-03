import express from "express";
import { inserirData } from "./utils/db.mjs";

const Port = 4004;

const Api = express();

Api.use(express. urlencoded({ inflate:false}))

Api.post("/api/user",function(req, res) {
    const data = req.body;
    res.send(data);
    //insertData(data);
})

Api.use("/", express.static("src/View"))

Api.listen(Port, () =>{
    console.log(`RUN in https://localhost:${Port}`)
});
