import { Router } from "express"
import { getAllCar,postCar,getCarUni,modifiCar,eliminarCar } from "../controllers/carro.controller.js"

const routerCarros = Router()

routerCarros.get("/carro",getAllCar)
routerCarros.get("/carro/:id_carro",getCarUni)
routerCarros.post("/carro",postCar)
routerCarros.put("/carro/:id_carro",modifiCar)
routerCarros.delete("/carro/:id_carro",eliminarCar)

export default routerCarros