
const {Dog, Temperament}=require('../db');
require('dotenv').config(); 
const axios=require('axios');
const{URL_API, API_KEY}=process.env

const apiData=async()=>{
    const api=await axios.get(`${URL_API}?api_key=${API_KEY}`);
    const apiInfo=await api.data.map(e=>{
        return{
            id:e.id,
            name:e.name,
            height:e.height.imperial,
            weight:e.weight.imperial,
            life_span:e.life_span,
            image:e.image.url,
            temperament:e.temperament
        }
    });
    return apiInfo
};

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