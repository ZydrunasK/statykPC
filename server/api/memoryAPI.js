import { connection } from "../db.js";

export async function memoryGetAPI(req, res) {
    console.log('api veikia');
    try {
        const sql = 'SELECT * FROM memory';
        const memoryList = await connection.execute(sql);
        res.json(memoryList[0])
    } catch (error) {
        console.log(error);
    }
}