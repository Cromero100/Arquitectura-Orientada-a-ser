import { getCarrosModel, postCarrosModel } from "../models/carro.model.js"
import { getModelo } from "../models/modelo.model.js"
export async function getAllCar (req,res){
    let datos = await getCarrosModel()
    let modelo = await getModelo()
    res.status(200).json({
        "success":true,
        "msg":"llegamos al getAllCar",
        "data":datos,
        "modelo":modelo
    })
}

export function postCar (req,res){
    res.status(200).json({
        "success":true,
        "msg":"llegamos al postCar"
    })
}