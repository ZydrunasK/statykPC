import { connection } from "../db.js";

export async function memoryGetAPI(req, res) {
    try {
        const sql = 'SELECT * FROM memory';
        const memoryList = await connection.execute(sql);
        res.json(memoryList[0])
    } catch (error) {
        console.error(error);
    }
}