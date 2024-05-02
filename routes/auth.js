const express = require("express")
const router = express.Router();
const { encrypt, compare } = require("../utils/handlePassword")
const { userModel } = require("../models");
const { validatorRegister } = require("../validators/auth");
const { matchedData } = require("express-validator");

/**
 * Ruta para crear un registro
 */
//TODO: http://localhost:3001/api/auth/login
//TODO: http://localhost:3001/api/auth/register
router.post("/register", validatorRegister, async (req, res)=>{
    req = matchedData(req);
    const password = await encrypt(req.password)
    const body = { ...req, password}
    const data = await userModel.create(body);
    data.set("password", undefined, {strict:false});
    res.send(data); 
});


module.exports = router