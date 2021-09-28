// POST /dog:
// Recibe los datos recolectados desde el formulario controlado de la ruta de creación de raza de perro por body
// Crea una raza de perro en la base de datos
const{Router}=require('express');
const router=Router();
const{Dog, Temperament}=require('../db');

router.post('/dog',async(req,res)=>{
    let{
        name,
        height,
        weigth,
        life_span,
        image,
        temperament
    }=req.body

    let dogCreated=await Dog.create({
        name,
        height,
        weigth,
        life_span,
        image
    })
    let dogDb=await Temperament.findAll({
        where:{name:temperament}
    });
    dogCreated.addTemperament(dogDb);
    res.send('Your dog is ready')
});

module.exports=router;