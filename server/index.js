require('dotenv').config()
const express = require('express');
const app = express();
const routers = require('./routes/index');
const cors = require('cors');
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 3000
const cloudinary = require('cloudinary').v2; // Importa la SDK de Cloudinary
cloudinary.config({
    cloud_name: 'dz0lruj7k',
    api_key: '128323134832632',
    api_secret: '04JixT8UcmHYY-QfbwSTBzT-L7I'
  });


app.use(cors())

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json())
app.use('/', routers)

app.listen(PORT, () => {

    console.log(`server on port ${PORT}`);
})

