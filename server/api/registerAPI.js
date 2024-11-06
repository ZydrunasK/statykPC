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
    console.log(req.body);
    
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
        
        if(insertResult[0].affectedRows !== 1) {
            return res.status(500).json({
                status: 'error',
                msg: 'Nepavyko sukurti paskyros'
            })
        }

    } catch (error) {
        console.log(error);
        if (error.code === 'ER_DUP_ENTRY') {
            return res.status(500).json({
                status: error,
                msg: 'toks email jau panaudotas'
            })
        }
        return res.status(400).json({
            status: 'error',
            msg: 'Serverio klaida: registracija nepavyko'
        })
    }

    return res.status(201).json({
        status: 'success',
        msg: 'Ok',
    });
}