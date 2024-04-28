const express = require("express")

const router = express.Router();
const { getItems, createItem } = require("../controllers/tracks")


//TODO: http://localhost/tracks GET,POST,DELE,PUT

router.get("/", getItems);

router.post("/", createItem);





module.exports = router