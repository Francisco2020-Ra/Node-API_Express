const { matchedData } = require("express-validator")
const { tracksModel } = require('../models')
const { handleHttpError } = require('../utils/handleError')

/**
 * Obtener una lista
 * @param {*} req 
 * @param {*} resp 
 */
const getItems = async (req, resp) =>{

    try{
        const data = await tracksModel.find({});
        resp.send({data})
    }catch(e){
        handleHttpError(resp, "Error_Get_Items")
    }

    
    
    
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
    try {
        const body = matchedData(req)
        const data = await tracksModel.create(body);
        resp.send({data})            
    } catch (error) {
        handleHttpError(resp, "Error_Create_Item")
    }
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