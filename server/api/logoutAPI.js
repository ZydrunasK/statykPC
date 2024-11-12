export async function logoutGetAPI(req, res) {
    
    const cookie = [
        'loginToken=' + req.cookies.loginToken,
        'domain=localhost',
        'path=/',
        'max-age=-1',
        'SameSite=Lax',
        // 'Secure',
        'HttpOnly',
    ];

    return res
    .status(200)
    .set('Set-cookie', cookie.join('; '))
    .json({
        status: 'success',
        msg: 'atsijungta nuo paskyros'
    })
}