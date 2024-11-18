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