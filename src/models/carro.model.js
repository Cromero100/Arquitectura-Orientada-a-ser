import PgConnection from "../services/pgConnection.service.js"

export async function getCarrosModel  (){
    const pg = new PgConnection()
    return await pg.connection.query("SELECT * FROM CARRO")
}

export function  postCarrosModel (){
    
}

