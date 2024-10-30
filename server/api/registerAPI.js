import { connection } from "../db.js";
import { IsValid } from "../lib/IsValid.js";

export async function registerPostAPI(req, res) {
    const requiredFields = [
        {
            field: 'email',
            validation: IsValid.email,
        },
        {
            field: 'password',
            validation: IsValid.password,
        }
    ];
    const [isErr, errMessage] = IsValid.requiredFields(req.body, requiredFields);
    if (isErr) {
        return res.status(400).json({
            status: 'error',
            msg: errMessage,
        });
    }

    const { email, password} = req.body;
    

    try {
        
        const sql = 'INSERT INTO users (email, password) VALUES (?, ?);';
        const insertResult = await connection.execute(sql, [email, password]);
        console.log(insertResult);
        
    } catch (error) {
        console.error(error)
    }
    
    if (typeof email !== 'string') {
        return res.json({
            status: 'error',
            msg: 'reikia email ir password',
        });
    }

    return res.status(201).json({
        status: 'success',
        msg: 'Ok',
    });
}