require('dotenv').config();

module.exports = {
   development: {
    dialect: 'postgres',
    host: 'containers-us-west-101.railway.app',
    port: 5796,
    username: 'postgres',
    password: '7DiTbQOQM41ekkw4fZmM',
    database: 'railway',

  },
  production: {
    dialect: 'postgres',
    host: 'containers-us-west-101.railway.app',
    port: 5796,
    username: 'postgres',
    password: '7DiTbQOQM41ekkw4fZmM',
    database: 'railway',

  },   

  /*  development: {
    dialect: 'postgres',
    host:  'localhost',
    port: 5432,
    username: 'postgres',
    password: 'password',
    database: 'turistic',

  },
  production: {
    dialect: 'postgres',
    host:  'localhost',
    port: 5432,
    username: 'postgres',
    password: 'password',
    database: 'turistic',
   
  },   */
};
