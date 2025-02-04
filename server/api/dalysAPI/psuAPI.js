import { connection } from "../../db.js";

export async function psuGetAPI(req, res) {
    try {
        const sql = 'SELECT * FROM psus';
        const psuList = await connection.execute(sql);
        res.json(psuList[0])
    } catch (error) {
        console.error(error);
    }
}
export async function psuGetStructureAPI(req, res) {
    try {
        const sql = 'DESCRIBE psus';
        const dataStructure = await connection.execute(sql); 
        res.json(dataStructure);
    } catch (error) {
        console.error(error);
    }
}