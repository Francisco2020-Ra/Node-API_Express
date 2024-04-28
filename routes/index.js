const express = require("express")
const fs = require("fs")
const router = express.Router();

//TODO: __dirname nos devuelve el path completo del lugar donde se encuentra el archivo
const PATH_ROUTES = __dirname;

const removeExtension = (fileName) =>{
    //TODO: tracks.js [tracks, js]
    return fileName.split('.').shift();
}
//TODO: esto nos devuelve una lista con el nombre de los arhivos que se encuentra en la carpeta routes
fs.readdirSync(PATH_ROUTES).filter((file) =>{
    const name = removeExtension(file)//TODO index,tracks
    if(name !== 'index'){
        router.use(`/${name}`, require(`./${file}`))//TODO: http://localhost/api/tracks 
    }
})


module.exports = router