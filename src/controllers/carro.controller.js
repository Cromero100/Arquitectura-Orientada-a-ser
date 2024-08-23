export function getAllCar (req,res){
    res.status(200).json({
        "success":true,
        "msg":"llegamos al getAllCar"
    })
}

export function postCar (req,res){
    res.status(200).json({
        "success":true,
        "msg":"llegamos al postCar"
    })
}