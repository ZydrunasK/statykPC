export function profileGetApi(req, res) {

    const data = req.user;
    return res.status(200).json({
        status: 'success',
        msg: 'profilio informacija rasta',
        username: data.username,
        email: data.email,
    })
}