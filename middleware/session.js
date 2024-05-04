const { handleHttpError } = require("../utils/handleError")
const { verifyToken } = require("../utils/handleJwt")
const { userModel} = require("../models/index")
const { getPropertiesId, getPropertiesOneId }  = require("../utils/handlePropertiesEngine");
const propertiesKeyId = getPropertiesId();
const authMiddleware = async (req, res, next) => {

    try {
        if(!req.headers.authorization){
            handleHttpError(res, "Not_Token", 401);
            return
        }
        const token = req.headers.authorization.split(' ').pop();
        const dataToken = await verifyToken(token);


        if(!dataToken){
            handleHttpError(res, "Not_Payload_Data", 401);
            return
        }

        if(!dataToken[propertiesKeyId.id]){
            handleHttpError(res, "Error_Id_Token", 401);
            return
        }

        const query = getPropertiesOneId(propertiesKeyId.id, dataToken);
        const user = await userModel.findOne(query);
        
        req.user = user;

        next();

    } catch (error) {
        handleHttpError(res, "Not_Session", 401)
    }
}

module.exports = authMiddleware