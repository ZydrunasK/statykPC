import { connection } from "../../db.js";

export async function storageGetAPI(req, res) {
    try {
        const sql = 'SELECT * FROM storage';
        const storageList = await connection.execute(sql);
        res.json(storageList[0])
    } catch (error) {
        console.error(error);
    }
}
export async function storageGetStructureAPI(req, res) {
    try {
        const sql = 'DESCRIBE storage';
        const dataStructure = await connection.execute(sql); 
        res.json(dataStructure);
    } catch (error) {
        console.error(error);
    }
}