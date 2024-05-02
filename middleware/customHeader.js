const customHeader = (req, res, next) => {
    console.log(req.headers)
    try {
        const apiKey = req.headers.api_key;
        if(apiKey === 'francisco-01'){
            next()
        }else{
            res.status(403)
            res.send({ error: "api-key incorrecta"})
        }
    } catch (error) {
        res.status(403)
        res.send({error: "Algo ha ocurrido"})
    }
}

module.exports = customHeader