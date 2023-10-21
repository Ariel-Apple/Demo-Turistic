const { User, Post } = require('../../database/models');

module.exports = {
  DetailsTuristic: async (req, res) => {
    const { idTuristic } = req.params; // Cambia el nombre del parámetro
    try {
      const postDetails = await Post.findByPk(idTuristic, {
        include: [{ model: User }] // Incluye el modelo User
      });
      if (postDetails) {
        res.status(200).send({ details: postDetails });
      } else {
        res.status(404).send({
          message: 'No existen detalles de la publicación'
        });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error en el servidor' });
    }
  }
};
