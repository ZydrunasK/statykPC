export function notFoundResponse(req, res, next) {
    return res.status(404).send("Sorry can't find that!");
}