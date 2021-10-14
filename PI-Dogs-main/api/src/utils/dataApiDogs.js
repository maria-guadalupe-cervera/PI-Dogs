// Recibo los datos de la API
const {Dog, Temperament}=require('../db');
require('dotenv').config(); 
const axios=require('axios');
const{URL_API, API_KEY}=process.env //api key única

const apiData=async()=>{ //función asincrónica 
    const api=await axios.get(`${URL_API}?api_key=${API_KEY}`);
    const apiInfo=await api.data.map(e=>{ //mapeo (recorro) la api y tomo los siguientes datos:
        return{
            id:e.id,
            name:e.name,
            height:e.height.imperial, //los traje en sistema métrico imperial (la otra opción era métrico)
            weight:e.weight.imperial,
            life_span:e.life_span,
            image:e.image.url,
            temperament:e.temperament
        }
    });
    return apiInfo
};
// encontrar todos los perros que incluyan...
const infoDB=async()=>{
    return await Dog.findAll({
        include:{
            model:Temperament,
            attributes:['name'],
            through:{
                attributes:[]
            },
        }
    });
};
// concatenar los datos de api y los de db
const allDogs=async()=>{
    const apiInfo=await apiData();
    const dbInfo=await infoDB();
    const totalInfo=apiInfo.concat(dbInfo);
    return totalInfo;
};

module.exports={
    apiData,
    infoDB,
    allDogs
};