const { User } = require('../../database/models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = {
  RegisterUser: async (req, res) => {
    const { name, lastName, password, email, phone } = req.body;

    try {
      const existingUser = await User.findOne({ where: { email } });

      if (existingUser) {
        console.log('El usuario ya existe');
        return res.status(400).json({ message: 'El usuario ya existe' });
      }

      const saltRounds = 10;
      const hashedPassword = await bcrypt.hash(password, saltRounds);

      let role = 'user';

      const adminEmails = ['admin1@gmail.com', 'admin2@fmail.com'];
      if (adminEmails.includes(email)) {
        role = 'admin';
      }

      const newUser = await User.create({
        name,
        lastName,
        email,
        password: hashedPassword,
        phone,
        role,
      });

      const tokenPayload = { id: newUser.id, role: newUser.role };
      const expiresIn = '8h';
      const token = jwt.sign(tokenPayload, process.env.FIRMA_TOKEN , { expiresIn });

      console.log('Usuario creado correctamente');
      return res.json({ token });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error en el servidor' });
    }
  },
};
