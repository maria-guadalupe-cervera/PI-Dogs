// GET /dogs/{idRaza}:
// Obtener el detalle de una raza de perro en particular
// Debe traer solo los datos pedidos en la ruta de detalle de raza de perro
// Incluir los temperamentos asociados

const { Router } = require('express');
const router = Router();

const {allDogs } = require('../utils/dataApiDogs')


router.get('/dogs/:id', async (req, res) => {
    const {id} = req.params; 
    const dogsTotal = await allDogs();
    if(id){
        let dogsId = await dogsTotal.filter(d => d.id == (id)); 
        dogsId.length ? 
        res.status(200).send(dogsId) :
        res.status(404).send('Sorry, that dog is not available. Try again ❤')
    }
});   


module.exports = router;