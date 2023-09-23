const { Router } = require('express');
const router = Router();
const { authenticate } = require('../helpers/middleware');
const { PostTuristic } = require('../controllers/User/PostTuristic')
const { AllTuristic } = require('../controllers/User/AllPost')
const { DetailsTuristic } = require('../controllers/User/DetailsTuristic');



const path = require('path');

const multer = require('multer');
const storage = multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, path.join(__dirname, '../uploads')); // Usa path.join para obtener la ruta absoluta
          },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
      cb(null, uniqueSuffix + path.extname(file.originalname));
    }
  });
const upload = multer({ storage: storage });



router.post('/post', authenticate, upload.array('imageFile', 100), PostTuristic);
router.get('/turistic', AllTuristic)

router.get('/turistic/:idTuristic', DetailsTuristic)






module.exports = router