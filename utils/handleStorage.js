const multer = require("multer")
//TODO http://localhost:3001/api/storage

const storage = multer.diskStorage({
    destination: function(req, file, cb){
        const pathStorage = `${__dirname}/../storage`;
        cb(null, pathStorage)
    },
    filename:function(req, file, cb){
        //Si el archivo tiene el mismo nombre se sobreescribe
        //TODO: mi-cv.pdf mi-foto.png mi-video.mp4

        //se obtiene la extension
        const extension = file.originalname.split('.').pop()
        const filename = `file-${Date.now()}.${extension}`

        cb(null,filename)
    }
});

const uploadMiddleware = multer({storage})


module.exports =  uploadMiddleware