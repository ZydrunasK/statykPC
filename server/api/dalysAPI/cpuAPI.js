import { connection } from "../../db.js";

export async function cpuGetAPI(req, res) {
    try {
        const sql = 'SELECT * FROM cpus';
        const cpuList = await connection.execute(sql);
        res.json(cpuList[0])
    } catch (error) {
        console.error(error);
    }
}