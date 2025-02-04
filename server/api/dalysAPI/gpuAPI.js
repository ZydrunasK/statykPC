import { connection } from "../../db.js";

export async function gpusGetAPI(req, res) {
    try {
        const sql = 'SELECT * FROM gpus';
        const gpusList = await connection.execute(sql);
        res.json(gpusList[0])
    } catch (error) {
        console.error(error);
    }
}
export async function gpusGetStructureAPI(req, res) {
    try {
        const sql = 'DESCRIBE gpus';
        const dataStructure = await connection.execute(sql); 
        res.json(dataStructure);
    } catch (error) {
        console.error(error);
    }
}