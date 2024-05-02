const express = require("express")
const router = express.Router();
const { validatorCreateItem } = require("../validators/tracks")
const { getItems, createItem } = require("../controllers/tracks")


//TODO: http://localhost/tracks GET,POST,DELE,PUT

router.get("/", getItems);

router.post("/", validatorCreateItem, createItem);





module.exports = router