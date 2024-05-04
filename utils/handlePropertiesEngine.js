const ENGINE_DB = process.env.ENGINE_DB;

const getPropertiesId = () =>{
    const data = {
        nosql:{
            id: '_id'
        },
        mysql:{
            id:'id'
        }
    }
    return data[ENGINE_DB]
}

const getPropertiesOneId = (id, dataToken) =>{
    const query = { 
        nosql:{
            [id]:dataToken[id]
        }, 
        mysql: {
            where:{
                [id]:dataToken[id]
            }
        }
    }
    return query[ENGINE_DB]
}

const getPropertiesOneEmail = (email) =>{
    const query = { 
        nosql:{
            email:email
        }, 
        mysql: {
            where:{
                email:email
            }
        }
    }
    return query[ENGINE_DB]
}

module.exports = { getPropertiesId, getPropertiesOneId, getPropertiesOneEmail }