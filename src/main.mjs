import express from "express";

const Port = 4000;

const Api = express();

Api.use("/",express.static("src/View"))


Api.listen(Port);
