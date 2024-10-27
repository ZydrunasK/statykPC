import { connection } from "../db.js";

export async function motherboardGetAPI() {
    console.log('api veikia');
    try {
        const sql = 'SELECT * FROM motherboards';
        const moboList = await connection.execute(sql);
        console.log(moboList[0]);
        
    } catch (error) {
        
    }
    return '';
}