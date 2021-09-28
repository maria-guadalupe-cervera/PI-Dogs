const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const router = Router();

const dogsRoute=require('./dogs');
const temperamentsRoute=require('./temperament');
const createdDogRoute=require('./createdDog');
const dogIdRoute=require('./dogId');
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/",dogsRoute);
router.use("/",temperamentsRoute);
router.use("/",createdDogRoute);
router.use("/",dogIdRoute);


module.exports = router;
