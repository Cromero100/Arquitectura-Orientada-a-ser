import { getCarrosModel, postCarrosModel,getCarUniModel,modifiCarModel,eliminarCarModel } from "../models/carro.model.js"
import { getModelo } from "../models/modelo.model.js"
export async function getAllCar (req,res){
    let datos = await getCarrosModel()
    res.status(200).json({
        "success":true,
        "msg":"llegamos al getAllCar",
        "data":datos,
    })
}

export async function getCarUni(req,res){
    let {id_carro}=req.params
    let data = await getCarUniModel(id_carro)
    res.status(200).json({
        success:true,
        data:data
    })
}

export async function postCar (req,res){
    let {NOMBRE,ANYO,EMPRESA}=req.body
    let data = await postCarrosModel(NOMBRE,ANYO,EMPRESA)
    res.status(200).json({
        "success":true,
        "msg":"Carro guardado exitosamente",
        "data":data
    })
}

export async function modifiCar (req,res){
    let {id_carro} = req.params
    let {NOMBRE,ANYO,EMPRESA}=req.body
    let data = await modifiCarModel(id_carro,NOMBRE,ANYO,EMPRESA)
    res.status(200).json({
        "success":true,
        "msg":"Carro modificado exitosamente",
        "data":data
    })
}

export async function eliminarCar (req,res){
    let {id_carro}=req.params
    let data = await eliminarCarModel(id_carro)
    res.status(200).json({
        "success":true,
        "msg":"Carro eliminado exitosamente",
        "data":data
    })
}