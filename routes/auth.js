const express = require("express")
const router = express.Router();
const { loginCtrl } = require("../controllers/auth")

const { validatorRegister } = require("../validators/auth");


/**
 * Ruta para crear un registro
 */
//TODO: http://localhost:3001/api/auth/login
//TODO: http://localhost:3001/api/auth/register
router.post("/register", validatorRegister, loginCtrl);


module.exports = router