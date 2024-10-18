import { IsValid } from "../lib/IsValid";

export function registerPostAPI(req, res) {
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
    const { email, password} = req.body;

    if (typeof email !== 'string') {
        return res.json({
            status: 'error',
            msg: 'reikia email ir password',
        });
    }

    return res.json({
        status: 'success',
        msg: 'ok',
    });
}