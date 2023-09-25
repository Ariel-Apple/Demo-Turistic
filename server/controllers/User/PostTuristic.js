const { Post } = require('../../database/models');
const cloudinary = require('cloudinary').v2;
const jwt = require('jsonwebtoken');
require('dotenv').config();
const multer = require('multer');
const path = require('path');

// Configuración de almacenamiento con Multer
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

// Configuración de Cloudinary
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

      const imageUrls = []; // Para almacenar las URL de las imágenes cargadas

      // Función para cargar una imagen en Cloudinary
      const uploadImageToCloudinary = async (file) => {
        try {
          const cloudinaryUploadResult = await cloudinary.uploader.upload(file.path, {
            resource_type: 'image',
            quality: 'auto:low',
            fetch_format: 'auto',
          });
          console.log('Imagen subida a Cloudinary:', cloudinaryUploadResult.secure_url);
          imageUrls.push(cloudinaryUploadResult.secure_url);
        } catch (error) {
          console.error('Error al cargar la imagen en Cloudinary:', error);
        }
      };

      // Carga de imágenes en paralelo con un intervalo de 1 segundo
      const files = req.files;
      let currentIndex = 0;

      const uploadInterval = setInterval(async () => {
        if (currentIndex < files.length) {
          await uploadImageToCloudinary(files[currentIndex]);
          currentIndex++;
        } else {
          clearInterval(uploadInterval); // Detiene la carga cuando se han subido todas las imágenes
          
          // Continúa con el resto de tu código para crear la publicación y responder al cliente
          jwt.verify(authorization, process.env.FIRMA_TOKEN, async (err, decoded) => {
            if (err) {
              return res.sendStatus(401);
            } else {
              const { title, price, people, summary, description, status, continent, infoImportant, daysAtentions, reservedDates, listDetails, hoursAtetionsInitial, hoursAtentionsFinally, country } = req.body;
              const parsedReservedDates = typeof reservedDates === 'string' ? JSON.parse(reservedDates) : [];
              const parsedListDetails = typeof listDetails === 'string' ? JSON.parse(listDetails) : [];
              const parsedInfoImportant = typeof infoImportant === 'string' ? JSON.parse(infoImportant) : [];

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

                // Asociación automática del usuario que está creando la publicación
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
        }
      }, 500); // Cada 1000 ms (1 segundo)

    } catch (error) {
      console.error('Error al crear el post:', error);
      res.status(500).json({ error: 'Ocurrió un error al crear el post' });
    }
  }
};
