const { storageModel } = require('../models')
const PUBLIC_URL = process.env.PUBLIC_URL;

/**
 * Obtener una lista
 * @param {*} req 
 * @param {*} resp 
 */
const getItems = async (req, resp) =>{

    const data = await storageModel.find({});
    
    resp.send({data})
}
/**
 * Obtener un detalle
 * @param {*} req
 * @param {*} resp 
 */
const getItem = (req, resp) =>{

}
/**
 * Crear un registro
 * @param {*} req 
 * @param {*} resp 
 */
const createItem = async (req, resp) =>{
    const { body, file } = req
    console.log(file)
    const fileData = {
        filename: file.filename,
        url: `${PUBLIC_URL}/${file.filename}`
    }
    const data = await storageModel.create(fileData);
    resp.send({data})
}
/**
 * Actualizar un registro
 * @param {*} req 
 * @param {*} resp 
 */
const updateItem = (req, resp) =>{

}
/**
 * Eliminar un registro
 * @param {*} req 
 * @param {*} resp 
 */
const deleteItem = (req, resp) =>{

}

module.exports = {getItems, getItem, createItem, updateItem, deleteItem }