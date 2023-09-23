const express = require('express');
const router = express.Router();
const {RegisterUser} = require('../controllers/User/RegisterUser');
const {LoginUser} = require('../controllers/User/LoginUser');
const {AllUser} = require('../controllers/User/AllUser');
const {DetailUser} = require('../controllers/User/DetailsUser');
const {DetailsPersonal} = require('../controllers/User/DetailsPersonal');






router.post('/auth/register', RegisterUser);
router.post('/auth/login', LoginUser);
router.get('/users', AllUser);
router.get('/user', DetailUser);
router.post('/user/data', DetailsPersonal);

const blacklist = []; // Lista negra para tokens inválidos

router.post('/logout', (req, res) => {
  const { token } = req.body;

  // Verificar si el token está en la lista negra
  if (blacklist.includes(token)) {
    return res.status(401).json({ message: 'Token inválido' });
  }

  // Agregar el token a la lista negra para invalidarlo
  blacklist.push(token);

  res.status(200).json({ message: 'Sesión cerrada exitosamente' });
});


/*  identify,
            country,
            city */




module.exports = router