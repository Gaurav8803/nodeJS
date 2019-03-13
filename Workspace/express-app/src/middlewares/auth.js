//auth middleware
const { verifyToken } = require('../middlewares/auth');

const tokenMiddleware = (req, res, next) => {
    let token = req.headers['authorization'];
    token = token.split(' ')[1];
    if (verifyToken(token)) { next(); }
    else {
        res.status(401).send();
    }
}

module.exports = { tokenMiddleware };