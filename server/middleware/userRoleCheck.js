export function userRoleCheck(req, res, next, requiredRole) {

    const role = req.role;

    if (requiredRole !== role) {
        return resizeBy.status(401).send('Seems like this is not for you')
    }

    next()
}