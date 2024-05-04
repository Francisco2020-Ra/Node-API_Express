const { matchedData } = require("express-validator");
const { tokenSign } = require("../utils/handleJwt")
const { encrypt, compare } = require("../utils/handlePassword")
const { userModel } = require("../models/index");
const { handleHttpError } = require('../utils/handleError')
const { getPropertiesOneEmail }  = require("../utils/handlePropertiesEngine");
const ENGINE_DB = process.env.ENGINE_DB;



/**
 * Este controlador es el encargado de registrar un usuario
 * @param {*} req
 * @param {*} res
 */
const registerCtrl = async (req, res) => {
    try {
        req = matchedData(req);
        const password = await encrypt(req.password)
        const body = { ...req, password }
        const dataUser = await userModel.create(body);
        dataUser.set("password", undefined, { strict: false });
    
        const data = {
            user: dataUser,
            token: await tokenSign(dataUser)
        }
        res.send(data);        
    } catch (error) {
        handleHttpError(res, "Error_Register_User")
    }

}

/**
 * Este controlador es el encargado de logear a una persona
 * @param {*} req
 * @param {*} res
 */
const loginCtrl = async (req, res) => {
    try {
        req = matchedData(req)
        console.log(req.email);
        const email = req.email;
        const propertiesKeyEmail = getPropertiesOneEmail(email);
        const user = (ENGINE_DB ==='nosql') ? await userModel.findOne(propertiesKeyEmail)
        .select("password") : await userModel.findOne(propertiesKeyEmail);
        console.log(user);
        if(!user){
            handleHttpError(res, "User_Not_Exists",404)
            return 
        }
        const hashPassword = user.password
        const check = await compare(req.password, hashPassword)
        if(!check){
            handleHttpError(res, "Invalid_Credentials",401)
            return 
        }

        user.set('password', undefined, {strict:false});
        const data = {
            token: await tokenSign(user),
            user
        }

        res.send({data});
    } catch (error) {
        console.log(error);
        handleHttpError(res, "Error_Login_User")
    }
}
module.exports = { registerCtrl, loginCtrl }