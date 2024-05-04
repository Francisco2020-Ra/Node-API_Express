const jwt = require("jsonwebtoken")
const JWT_TOKEN = process.env.JWT_SECRET;


/**
 * Debes de pasar el objeto del usuario
 * @param {*} user
 */
const tokenSign = async(user) => {
    const sign = jwt.sign({
        _id: user._id,
        role: user.role
    },
    JWT_TOKEN,
    {
        expiresIn:"2h"
    });

    return sign;
}

/**
 * 
 * @param {*} tokenJwt 
 * @returns 
 */
const verifyToken = async(tokenJwt) =>{
    try {
        return jwt.verify(tokenJwt, JWT_TOKEN)
    } catch (error) {
        return null;
    }
}

module.exports = { tokenSign, verifyToken }