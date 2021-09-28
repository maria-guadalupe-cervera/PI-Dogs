// GET /temperament:
// Obtener todos los temperamentos posibles
// En una primera instancia deberán obtenerlos desde la API externa y guardarlos en su propia base de datos y luego ya utilizarlos desde allí

const {Router}=require('express');
const router=Router();

const{Dog, Temperament, dog_temperament}=require('../db');
require("dotenv").config();
const axios =require('axios');
const{URL_API,API_KEY}=process.env;

router.get('/temperament',async(req,res)=>{
    // let temps=[];
    // const tempsApi=await axios.get(`${URL_API}?api_key=${API_KEY}`); //conecto la api
    // const temperaments=tempsApi.data.map(tem=>tem.temperament);//lo busco
    // let tempDiv=temperaments.map(e=>e&&e.split(', '));//como es un arry lo divido 
    // let tempArr=tempDiv.flat().sort(); //flat concatena todos los temps en uno array / sort ordena de may a men (alfabeticamente)
    // tempDiv.map(e=>{
    //     if(e!==undefined){
    //         temps.push(e)
    //     }
    // });
    // let tempG=temps.filter((item,index)=>{
    //     return temps.indexOf(item)===index;
    // })
    // /* console.log(tempG) */
    // for (let i = 0 ; i < tempG.length ; i++) {
    //     Temperament.findOrCreate({
    //         where: {name: tempG[i]}
    //     })
    // };    
        
    // const allTemperaments = await Temperament.findAll();
    // res.send(allTemperaments)
    var tempsEnds = [];
    const apiTemperament = await axios.get(`${URL_API}?api_key=${API_KEY}`);
    const temperaments = apiTemperament.data.map(t => t.temperament);
    let tempSplit = temperaments.map(e => e && e.split(","))
    let tempArray = tempSplit.flat().sort()
    tempArray.map(el => {
        if (el !== undefined) {
            let tempTrim = el.trim()
            tempsEnds.push(tempTrim)           
        }        
    }); 
    let finalArrayTemps = tempsEnds.filter((item,index)=>{
        return tempsEnds.indexOf(item) === index;
      }) 
    
    // console.log(finalArrayTemps)
       
    for (let i = 0 ; i < finalArrayTemps.length ; i++) {
        Temperament.findOrCreate({
            where: {name: finalArrayTemps[i]}
        })
    };    
        
    const allTemperaments = await Temperament.findAll();
    res.send(allTemperaments)

});

module.exports = router;