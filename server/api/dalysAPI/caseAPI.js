import { connection } from "../../db.js";

export async function caseGetAPI(req, res) {
    try {
        const sql = 'SELECT * FROM cases';
        const caseList = await connection.execute(sql);
        res.json(caseList[0])
    } catch (error) {
        console.error(error);
    }
}
export async function caseGetStructureAPI(req, res) {
    try {
        const sql = 'DESCRIBE cases';
        const dataStructure = await connection.execute(sql); 
        res.json(dataStructure);
    } catch (error) {
        console.error(error);
    }
}