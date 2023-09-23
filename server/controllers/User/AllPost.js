const { User, Post } = require('../../database/models') 

module.exports = {
  AllTuristic: async (req, res) => {
    try {
      const posts = await User.findAll({
        include: [{ model: Post }] // Usa 'include' en lugar de 'includes'
      });

      if (posts.length > 0) {
        res.status(200).send({User: posts});
      } else {
        res.status(404).send({
          message: 'No existen usuarios'
        });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error en el servidor' });
    }
  }
};
 