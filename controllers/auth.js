const { matchedData } = require("express-validator");
const { tokenSign } = require("../utils/handleJwt")
const { encrypt, compare } = require("../utils/handlePassword")
const { userModel } = require("../models");

const loginCtrl = async (req, res) => {
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
}

module.exports = { loginCtrl }