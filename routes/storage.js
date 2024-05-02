const express = require("express")
const router = express.Router();
const uploadMiddleware = require("../utils/handleStorage");
const { createItem } = require("../controllers/storage");


//Si es uno solo es single() si envio varios es multi()
router.post("/", uploadMiddleware.single("myfield"), createItem)



module.exports = router;
