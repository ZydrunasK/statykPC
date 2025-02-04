import { connection } from "../../db.js";

export async function motherboardGetAPI(req, res) {
    try {
        const sql = 'SELECT * FROM motherboards';
        const moboList = await connection.execute(sql);
        res.json(moboList[0])
    } catch (error) {
        console.log('error: ' + error);
    }
}
export async function motherboardGetStructureAPI(req, res) {
    try {
        const sql = 'DESCRIBE motherboards';
        const dataStructure = await connection.execute(sql); 
        res.json(dataStructure);
    } catch (error) {
        console.error(error);
    }
}