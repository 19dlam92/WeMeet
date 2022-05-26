const jwt = require('jsonwebtoken');

module.exports.authenticate = ( request, response, next ) => {
    jwt.verify( request.cookies.accessToken, process.env.SECRET_KEY, (error, payload) => {
        if (error) {
            response.status(401).json({ verified: false })
        } else {
            next();
        }
    });
}