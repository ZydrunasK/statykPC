import { connection } from "../db.js";
import { COOKIE_ALLOWED_SYMBOLS, COOKIE_MAX_AGE, COOKIE_SIZE } from "../env.js";

export async function getUserData(req, res, next) {   
    
    req.user = {
        id: -1,
        email: '',
        username: '',
        role: 'public',
        isLoggedIn: false,
    }
    console.log('-------> ', req.user);

    const {loginToken} = req.cookies;
    let tokenObj = null;
    
    if (typeof loginToken !== 'string'
        || loginToken.length !== COOKIE_SIZE) {
            return next();
    }
    for (let i = 0; i < COOKIE_SIZE; i++) {
        if (!COOKIE_ALLOWED_SYMBOLS.includes(loginToken[i])) {
            return next();
        }
    }
        
    try {
        const sql = `
        SELECT users.id AS id, email, username, role, token, created_at  
        FROM users
        INNER JOIN roles
        ON users.role_id = roles.id
        INNER JOIN tokens
        ON users.id = tokens.user_id
        WHERE token = ?;`;
        const selectResult = await connection.execute(sql, [loginToken]);
        
        if (selectResult[0].length !== 1) {
            return next();
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
                    msg: 'ka cia dirbi?',
                    isLoggedIn: false,
                    role: 'public',
                });
        }
        

    } catch (error) {
        return res.status(500).json({
            status: 'error',
            msg: `Serverio klaida. Nepavyko atpazinti vartotojo sesijos`,
            isLoggedIn: false,
            role: 'public',
        });  
    }
    
    req.user = {
        id: tokenObj.id,
        email: tokenObj.email,
        username: tokenObj.username,
        role: tokenObj.role,
        isLoggedIn: true,
    }
    console.log('-------> ', req.user);
    
    next(); 
}

