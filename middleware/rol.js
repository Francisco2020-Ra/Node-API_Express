
const { handleHttpError } = require("../utils/handleError")

/**
 * Array con los roles permitidos
 * @param {*} rol 
 */
const checkRol = (roles) => (req, res, next) => {
    try {
        const { user } = req;
        const rolesByUser = user.role;
        const checkValueRol = roles.some((rolSingle) => rolesByUser.includes(rolSingle));
        if(!checkValueRol){
            handleHttpError(res, "User_Not_Persmission", 403)
            return
        }
        next();
    } catch (error) {
        handleHttpError(res, "Error_Persmission", 403)
    }
}

module.exports = checkRol;