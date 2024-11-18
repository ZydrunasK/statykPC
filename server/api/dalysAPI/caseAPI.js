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