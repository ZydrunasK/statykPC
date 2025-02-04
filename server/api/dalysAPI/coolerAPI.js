import { connection } from "../../db.js";

export async function coolerGetAPI(req, res) {
    try {
        const sql = 'SELECT * FROM coolers';
        const coolerList = await connection.execute(sql);
        res.json(coolerList[0])
    } catch (error) {
        console.error(error);
    }
}
export async function coolerGetStructureAPI(req, res) {
    try {
        const sql = 'DESCRIBE coolers';
        const dataStructure = await connection.execute(sql); 
        res.json(dataStructure);
    } catch (error) {
        console.error(error);
    }
}