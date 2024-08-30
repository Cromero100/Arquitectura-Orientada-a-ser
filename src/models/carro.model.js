import PgConnection from "../services/pgConnection.service.js"

export async function getCarrosModel  (){
    const pg = new PgConnection()
    return await pg.connection.query("SELECT * FROM CARRO")
}

export async function getCarUniModel (id_carro){
    try{
        const pg = new PgConnection()
        return await pg.connection.query("SELECT * FROM CARRO WHERE id_carro=$1",[id_carro])
    } catch (error){
        return []
    }
    
}

export async function  postCarrosModel (NOMBRE,ANYO,EMPRESA){
    const pg = new PgConnection()
    return await pg.connection.query("INSERT INTO CARRO (NOMBRE,ANYO,EMPRESA) VALUES ($1,$2,$3) returning *",[NOMBRE,ANYO,EMPRESA])
}

export async function modifiCarModel (id_carro,NOMBRE,ANYO,EMPRESA){
    const pg = new PgConnection()
    return await pg.connection.query("UPDATE CARRO SET NOMBRE=$1, ANYO=$2, EMPRESA=$3 WHERE ID_CARRO=$4 returning *",[NOMBRE,ANYO,EMPRESA,id_carro])
}

export async function eliminarCarModel (id_carro){
    const pg = new PgConnection()
    return await pg.connection.query("DELETE FROM CARRO WHERE ID_CARRO=$1 returning *",id_carro)
}
