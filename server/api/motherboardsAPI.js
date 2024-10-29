import { connection } from "../db.js";

export async function motherboardGetAPI(req, res) {
    console.log('api veikia');
    try {
        const sql = 'SELECT * FROM motherboards';
        const moboList = await connection.execute(sql);
        res.json(moboList[0])
    } catch (error) {
        console.log('error: ' + error);
    }
}