const { Post } = require('../../database/models');
const cloudinary = require('cloudinary').v2;
const jwt = require('jsonwebtoken');
require('dotenv').config();
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const sharp = require('sharp'); // Importa la biblioteca sharp

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
  PostTuristic: async (req, res) => {
    try {
      const { authorization } = req.headers;
      if (!req.files || req.files.length === 0) {
        return res.status(400).send('No se han proporcionado archivos.');
      }

      const imageUrls = [];

      for (const file of req.files) {
        const fileBuffer = await fs.promises.readFile(file.path);

        // Aplicar optimización de imagen con sharp
        const optimizedBuffer = await sharp(fileBuffer)
          .resize({ width: 800, height: 600 }) // Cambia el tamaño de la imagen si es necesario
          .jpeg({ quality: 80 }) // Ajusta la calidad de la imagen (para JPEG)
          .toBuffer();

        // Subir imagen optimizada a Cloudinary y obtener la URL
        const cloudinaryUploadResult = await cloudinary.uploader.upload_stream(
          { resource_type: 'image' },
          (error, result) => {
            if (error) {
              console.error('Error al subir imagen a Cloudinary:', error);
            } else {
              imageUrls.push(result.secure_url);
            }
          }
        ).end(optimizedBuffer);
      }

      jwt.verify(authorization, process.env.FIRMA_TOKEN, async (err, decoded) => {
        if (err) {
          return res.sendStatus(401);
        } else {
          const { title, price, people, summary, description, status, continent, infoImportant, daysAtentions, reservedDates, listDetails, hoursAtetionsInitial, hoursAtentionsFinally, country } = req.body;
          const parsedReservedDates = JSON.parse(reservedDates);
          const parsedListDetails = JSON.parse(listDetails);
          const parsedInfoImportant= JSON.parse(infoImportant);


          if (status === "Privado") {
            
            const newPost = await Post.create({
              title,
              price,
              people,
              summary,
              description,
              status,
              continent,
              country,
              daysAtentions,
              hoursAtetionsInitial,
              hoursAtentionsFinally,
              infoImportant: parsedInfoImportant,
              reservedDates: parsedReservedDates,
              listDetails: parsedListDetails,
              imageFile: imageUrls,
              
            });
            // Asociamos automáticamente el usuario que está creando la publicación
            const userId = decoded.id;
            await newPost.addUser(userId);
            console.log('Post creado correctamente');
            res.status(201).json({ message: 'Post creado exitosamente' });
          } else if (status === "Público") {
            const newPostPublic = await Post.create({
              title,
              summary,
              description,
              status,
              imageFile: imageUrls,
            });
            const userId = decoded.id;
            await newPostPublic.addUser(userId);
            console.log('Post creado correctamente');
            res.status(201).json({ message: 'Post creado exitosamente' });
          }
        }
      });
    } catch (error) {
      console.error('Error al crear el post:', error);
      res.status(500).json({ error: 'Ocurrió un error al crear el post' });
    }
  }
};
