import { connection } from "../db.js";
import { COOKIE_SIZE } from "../env.js";
import { IsValid } from "../lib/IsValid.js";
import { randomString } from "../lib/randomString.js";

export async function loginPostAPI(req, res) {
    const requiredFields = [
        { field: 'email', validation: IsValid.email },
        { field: 'password', validation: IsValid.password },
    ];
    
    const [isErr, errMessage] = IsValid.requiredFields(req.body, requiredFields);
    if (isErr) {
        return res.status(400).json({
            status: 'error',
            msg: errMessage,
        });
    }

    const {email, password} = req.body;
    let user = null;

    try {
        const sql = `SELECT * FROM users WHERE email = ? AND password = ?;`;
        const selectResult = await connection.execute(sql, [email, password]);

        if (selectResult[0].length !== 1) {
            return res.status(400).json({
                status: 'error',
                msg: 'Tokios paskyros nera'
            })
        } else {
            user = selectResult[0][0];
        }
    } catch (error) {
        res.status(500).json({
            status: 'error',
            msg: 'didele problema'
        })
    };

    const token = randomString(COOKIE_SIZE);
    
    try {
        const sql = 'INSERT INTO tokens (token, user_id) VALUES (?, ?);';
        const insertResult = await connection.execute(sql, [token, user.id]);

        if (insertResult[0].affectedRows !== 1) {
            return res.status(500).json({
                status: 'error',
                msg: 'nepavyko prisijungti'
            })
        }
    } catch (error) {
        res.status(500).json({
            status: 'error',
            msg: 'nepavyko prisijungti'
        })
    }



    /* cookie max age in seconds */
    const maxAge = 20 * 60;
    const cookie = [
        'LoginToken=' + token,
        'domain=localhost',
        'path=/',
        'max-age=' + maxAge,
        'sameSite=Lax',
        // 'Secure',
        'HttpOnly',
    ];

    return res
    .status(200)
    .set('Set-Cookie', cookie.join('; '))
    .json({
        status: 'success',
        msg: 'OK',
        role: 'user',
        id: user.id,
        username: user.username,
        email: user.email,
    })
}