const { User } = require('../../database/models');
const cloudinary = require('cloudinary').v2;
const multer = require('multer');
const path = require('path');
const bcrypt = require('bcrypt');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, '../../uploads'));
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  }
});

const upload = multer({ storage: storage });

cloudinary.config({
  cloud_name: 'dz0lruj7k',
  api_key: '128323134832632',
  api_secret: '04JixT8UcmHYY-QfbwSTBzT-L7I'
});

module.exports = {
  Preregister: async (req, res) => {
    const { userId } = req.params;
    const { name, lastName, email, password, phone, aboutMe } = req.body;

    try {
        const file = req.file;

          const cloudinaryUploadResult = await cloudinary.uploader.upload(file.path, {
            resource_type: 'image',
            quality: 'auto:low',
            fetch_format: 'auto',
          });
          console.log('Imagen subida a Cloudinary:', cloudinaryUploadResult.secure_url);
          const saltRounds = 10;
          const hashedPassword = await bcrypt.hash(password, saltRounds);
          const user = await User.findByPk(userId);

          const userUpdate = await user.update({
            name,
            lastName,
            email,
            password: hashedPassword,
            phone,
            aboutMe,
            avatar: cloudinaryUploadResult.secure_url
          })
            res.status(200).send(userUpdate)
      
    
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error en el servidor' });
    }
  }
};
