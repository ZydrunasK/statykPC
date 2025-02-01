export const userRoleCheck = (requiredRole) => {
    return (req, res, next) => {
        const role = req.user.role;
        if (requiredRole !== role) {
            console.log(req.user);
            return res.status(401).json({msg: 'bad juju'})
        }
        next();
    }
}
