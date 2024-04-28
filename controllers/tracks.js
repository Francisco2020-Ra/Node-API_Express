const { tracksModel } = require('../models')


/**
 * Obtener una lista
 * @param {*} req 
 * @param {*} resp 
 */
const getItems = async (req, resp) =>{

    const data = await tracksModel.find({});
    
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
    const { body } = req
    console.log(body)
    const data = await tracksModel.create(body);
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