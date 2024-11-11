export function getUserData(req, res, next) {   

    req.user = {
        role: 'public',
        isLoggedIn: false,
        email: '',
        id: -1,
    }
    
    next(); 
}