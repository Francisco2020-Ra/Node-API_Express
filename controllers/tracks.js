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
const getItem = async (req, resp) =>{
    try {
        req = matchedData(req);
        const { id } = req;

        const data = await tracksModel.findById(id)
        resp.send({data})
    } catch (error) {
        handleHttpError(resp, "Error_Get_Item")
    }
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
const updateItem = async (req, resp) =>{
    
    try {
        const {id, ...body} = matchedData(req)
        console.log(id, body)
        const data = await tracksModel.findOneAndUpdate(
            {_id : id }, //Filtro de busqueda
            body, // Datos a actualizar
            { new: true } //Opciones: devolver el nuevo documento actualizado 
        );
        
        resp.send({data})            
    } catch (error) {
        console.log(error);
        handleHttpError(resp, "Error_Update_Item")
    }
}
/**
 * Eliminar un registro
 * @param {*} req 
 * @param {*} resp 
 */
const deleteItem = async (req, resp) =>{
    try {
        req = matchedData(req);
        const { id } = req;

        const data = await tracksModel.deleteOne({ _id: id })
        resp.send({data})
    } catch (error) {
        handleHttpError(resp, "Error_Delete_Item")
    }
}

module.exports = {getItems, getItem, createItem, updateItem, deleteItem }