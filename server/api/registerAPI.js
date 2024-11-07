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
        },
        {
            field: 'username',
            validation: IsValid.username,
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

    const { username, email, password} = req.body;

    try {

        const sql = 'INSERT INTO users (username, email, password) VALUES (?, ?, ?);';
        const insertResult = await connection.execute(sql, [username, email, password]);
        console.log(insertResult);
        
        if(insertResult[0].affectedRows !== 1) {
            return res.status(500).json({
                status: 'error',
                msg: 'Nepavyko sukurti paskyros'
            })
        }

    } catch (error) {
        
        if (error.code === 'ER_DUP_ENTRY') {
            const errMsgKey = error.sqlMessage.split(' ').at(-1).slice(1, -1);
            return res.status(500).json({
                status: 'error',
                msg: `toks ${errMsgKey === 'username' ? 'slapyvardis' : errMsgKey} jau panaudotas`
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