const express = require("express")
const router = express.Router();
const { registerCtrl, loginCtrl } = require("../controllers/auth")

const { validatorRegister, validatorLogin } = require("../validators/auth");


/**
 * Ruta para crear un registro
 */
//TODO: http://localhost:3001/api/auth/login
//TODO: http://localhost:3001/api/auth/register
router.post("/register", validatorRegister, registerCtrl);

router.post("/login", validatorLogin, loginCtrl);


module.exports = router