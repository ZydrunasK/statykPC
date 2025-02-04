import { connection } from "../db.js";
import { COOKIE_ALLOWED_SYMBOLS, COOKIE_MAX_AGE, COOKIE_SIZE } from "../env.js";
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
        const sql = `
        SELECT role, users.id AS id, email, username FROM users
        INNER JOIN roles
            ON users.role_id = roles.id
        WHERE email = ? AND password = ?;`;
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
        'loginToken=' + token,
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
        role: user.role,
        id: user.id,
        username: user.username,
        email: user.email,
    })
}

export async function loginGetAPI(req, res) {
    // patikrinti ar turim galiojanti cookie(loginToken)
    const {loginToken} = req.cookies;
    
    if (!loginToken) {
        return res.status(400).json({
            status: 'error',
            msg: 'nera loginToken'
        })
    }

    if (typeof loginToken !== 'string'
        || loginToken.length !== COOKIE_SIZE) {
            return res.status(400).json({
                status: 'error',
                msg: 'ERROR: neteisingas loginToken'
            })
    }

    for (const s of loginToken) {
        if (!COOKIE_ALLOWED_SYMBOLS.includes(s)) {
            return res.status(400).json({
                status: 'error',
                msg: 'ERROR: neteisingas loginToken'
            })
        }
    }

    let tokenObj = null;

    try {

        const sql = `
        SELECT role, users.id AS id, email, username, created_at FROM users
        INNER JOIN tokens
            ON users.id = tokens.user_id
        INNER JOIN roles
            ON users.role_id = roles.id
        WHERE token = ?;`;
        const selectResult = await connection.execute(sql, [loginToken]);        
        if (selectResult[0].length !== 1) {
            return res.status(500).json({
                status: 'error',
                msg: 'ERROR: nepavyko atpazinti vartotojo sesijos'
            })
        }

        tokenObj = selectResult[0][0];
        
        
        if (tokenObj.created_at.getTime() + COOKIE_MAX_AGE * 1000 < Date.now()) {            
            const cookie = [
                'loginToken=' + loginToken,
                'domain=localhost',
                'path=/',
                'max-age=-1',
                'SameSite=Lax',
                // 'Secure',
                'HttpOnly',
            ];

            return res
                .status(200)
                .set('Set-Cookie', cookie.join('; '))
                .json({
                    status: 'error',
                    msg: 'kazkas cia jau pridirbo',
                });
        }
    } catch (error) {
        return res.status(500).json({
            status: 'error',
            msg: 'ERROR: nepavyko atpazinti vartotojo sesijos'
        });
    }

    return res.status(200).json({
        status: 'success',
        msg: 'OK',
        role: tokenObj.role,
        id: tokenObj.id,
        username: tokenObj.username,
        email: tokenObj.email,
    })
}