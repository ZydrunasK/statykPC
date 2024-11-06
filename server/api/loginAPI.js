import { connection } from "../db.js";

export async function loginPostAPI(req, res) {
    const {email, password} = req.body;
    console.log(email, password);
    

    try {
        const sql = `SELECT * FROM users WHERE email = ? AND password = ?;`;
        const selectResult = await connection.execute(sql, [email, password]);
        console.log(selectResult);
        

    } catch (error) {
        console.error(error);
    }
    return res.json({

    })
}