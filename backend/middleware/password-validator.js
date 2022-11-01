const passwordSchema = require('../models/password'); // we get the password pattern 

module.exports = (req, res, next) => {
    if (!passwordSchema.validate(req.body.password)) { // if the request password does not match the requested pattern
        res.writeHead(400, '{"message": "Your password must contain at least 8 characters including at least 1 uppercase letter, 1 lowercase letter and a number without spaces "}', {
            'content-type': 'application/json'
        });
        res.end('Incorrect password format');
    } else {
        next(); 
    }
};