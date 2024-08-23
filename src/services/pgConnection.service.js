import pgPromise from "pg-promise";

export default class PgConnection{
    static instance
    connection

    constructor(){
        if (PgConnection.instance){
            return PgConnection.instance
        }
        PgConnection.instance = this
        const pgp = pgPromise({})
        /* driver:// nombre_usuario: contraseña @ direccion_bd: puerto/nombre:db/ */
        this.connection=pgp("postgres://postgres:admin@localhost:5432/postgres")
        this.connection.connect().then(obj=>{
            console.log("Me conecté "+ obj.client.serverVersion)
            obj.done()
        })
        .catch(error=>{
            console.log("Error: "+error.message||error)
        })
    }
}
