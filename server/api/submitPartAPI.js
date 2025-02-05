import { connection } from "../db.js";
import { PARTS_NAMES_DB, COOKIE_ALLOWED_SYMBOLS } from "../env.js";

export async function submitPartAPI(req, res) {
    const partNameDB = PARTS_NAMES_DB.split('-')[req.body[1].partTypeArrID];
    const partObjKeys = Object.keys(req.body[0]).join(', ');
    const partObjValues = Object.values(req.body[0]);
    const valueQuestionMarks = Object.keys(req.body[0]).map(key => '?').join(', ');
    console.log(valueQuestionMarks);
    


    try {
        const sql = `INSERT INTO ${partNameDB} (${partObjKeys}) VALUES (${valueQuestionMarks})`;
        const insertResult = await connection.execute(sql, [...partObjValues])
    } catch (error) {
        
    }
    
}