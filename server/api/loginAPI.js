import { connection } from "../db.js";

export async function loginPostAPI(req, res) {
    const {email, password} = req.body;

    try {
        const sql = `SELECT * FROM users WHERE email = ? AND password = ?;`;
        const selectResult = await connection.execute(sql, [email, password]);
        console.log(selectResult[0]);

        if (selectResult[0].length !== 1) {
            return res.status(400).json({
                status: 'error',
                msg: 'serverio klaida'
            })
        }

        return res.status(200).json({
            status: 'success',
            msg: 'duomenys rasti'
        })
        
    } catch (error) {
        console.error(error);
    }
    return res.json({

    })
}