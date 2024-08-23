import express  from "express";
import { enviroment } from "./default.js";
import route from "../routers/index.route.js";
import PgConnection from "../services/pgConnection.service.js";

export default class Server{
    constructor(){
        this.app = express()
        this.port = enviroment.port
    }

    async connectionDb(){
        new PgConnection()
    }
    middlewares(){
        this.app.use(express.json())
    }

    route(){
        this.app.use(route)
    }

    runServer(){
        this.connectionDb()
        this.middlewares()
        this.route()
        this.app.listen(this.port, ()=>{
            console.log(`Hola servidor ${this.port}`)
        })
    }
}