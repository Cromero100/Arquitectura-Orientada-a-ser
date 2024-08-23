import PgConnection from "../services/pgConnection.service.js"

export async function getModelo  (){
    const pg = new PgConnection()
    return await pg.connection.query("SELECT * FROM MODELO")
}
