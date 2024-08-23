import { Router } from "express"
import { getAllCar,postCar } from "../controllers/carro.controller.js"

const routerCarros = Router()

routerCarros.get("/carro",getAllCar)
routerCarros.post("/carro",postCar)
routerCarros.put("/carro")
routerCarros.delete("/carro")

export default routerCarros