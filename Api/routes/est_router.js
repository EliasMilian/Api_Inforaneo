const express = require('express');
const router = express.Router();

const {

    create,
    comida,
    bebida,
    servicios,
    lugaresDeInteres ,
    utilidadesUniversitarias,
    ocio,
    obtenerAleatorio,
    add,
    addComment,
    getComments,
    
}= require('../controllers/establecimientos_controller');




router.get('/comida', comida);
router.get('/bebidas', bebida);
router.get('/servicios', servicios);
router.get('/lugaresDeInteres', lugaresDeInteres);
router.get('/utilidadesUniversitarias', utilidadesUniversitarias);
router.get('/ocio', ocio);
router.get('/obtenerAleatorio', obtenerAleatorio); //Este es el controlador nuevo
router.post('/create', create);
router.post('/:title/comment', addComment);
router.get('/:title/comments', getComments);

module.exports = router;