import { connection } from "../../db.js";

export async function gpuGetAPI(req, res) {
    try {
        const sql = 'SELECT * FROM gpu';
        const gpuList = await connection.execute(sql);
        res.json(gpuList[0])
    } catch (error) {
        console.error(error);
    }
}