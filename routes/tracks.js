const express = require("express")
const router = express.Router();
const customHeader = require("../middleware/customHeader")
const { validatorCreateItem, validatorGetItem } = require("../validators/tracks")
const { getItems, getItem, createItem, updateItem, deleteItem } = require("../controllers/tracks")


//TODO: http://localhost/tracks GET,POST,DELE,PUT
/**
 * Ruta para Listar los items
 */
router.get("/", getItems);

/**
 * Ruta para obtener un items
 */
router.get("/:id", validatorGetItem, getItem);

/**
 * Ruta para crear un registro
 */
router.post("/", validatorCreateItem, createItem);


/**
 * Ruta para actualizar un registro
 */
router.put("/:id", validatorGetItem, validatorCreateItem, updateItem);


/**
 * Ruta para eliminar un registro
 */
router.delete("/:id", validatorGetItem, deleteItem);



module.exports = router