import "reflect-metadata";
import express from "express";
import createConnection from "./database";
createConnection();
const app = express();
app.use(express.json());
app.listen(3434, () =>{
    console.log("Server is running.");
})