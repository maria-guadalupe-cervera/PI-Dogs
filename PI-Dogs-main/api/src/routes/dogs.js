// GET /dogs?name="...":
// Obtener un listado de las razas de perro que contengan la palabra ingresada como query parameter
// Si no existe ninguna raza de perro mostrar un mensaje adecuado

const {Router}=require('express');
const router=Router();
const{allDogs}=require('../utils/dataApiDogs');


router.get('/dogs',async(req,res)=>{
    const {name}=req.query;
    const totalDogs=await allDogs();
    if(name){
        let dogName=await totalDogs.filter(d=>d.name.toLowerCase().includes(name.toLowerCase()));
     /*  if(dogName.length){
          res.status(200).send(dogName)
      }else{
          res.status(404).send('Sorry, that dog is not available. Try again ❤')
      } */
      dogName.length ?  
        res.status(200).send(dogName) :
        res.status(404).send('Sorry, that dog is not available. Try again ❤')
    }else {
        res.status(200).send(totalDogs);
    }
});
module.exports=router;