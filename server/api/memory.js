import { connection } from "../db.js";

export async function memoryGetAPI() {
    console.log('api veikia');
    try {
        const sql = 'SELECT * FROM memory';
        const memoryList = await connection.execute(sql);
        console.log(memoryList[0]);
        
    } catch (error) {
        
    }
    return '';
}