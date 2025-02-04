import { connection } from "../../db.js";

export async function memoryGetAPI(req, res) {
    try {
        const sql = 'SELECT * FROM memory';
        const memoryList = await connection.execute(sql);
        res.json(memoryList[0])
    } catch (error) {
        console.error(error);
    }
}
export async function memoryGetStructureAPI(req, res) {
    try {
        const sql = 'DESCRIBE memory';
        const dataStructure = await connection.execute(sql); 
        res.json(dataStructure);
    } catch (error) {
        console.error(error);
    }
}