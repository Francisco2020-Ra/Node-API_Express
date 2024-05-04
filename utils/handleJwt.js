const jwt = require("jsonwebtoken");
const JWT_TOKEN = process.env.JWT_SECRET;
const { getPropertiesId }  = require("../utils/handlePropertiesEngine");
const propertiesKey = getPropertiesId();

/**
 * Debes de pasar el objeto del usuario
 * @param {*} user
 */
const tokenSign = async(user) => {
    const sign = jwt.sign({
        [propertiesKey.id]: user[propertiesKey.id],
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