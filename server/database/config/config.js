require('dotenv').config();

module.exports = {
 development: {
     dialect: 'postgres',
    host: 'monorail.proxy.rlwy.net',
    port: 57912,
    username: 'postgres',
    password: 'G-3cbAB3c135Ce2BF*63EcED41DfGAFd',
    database: 'railway',

  },
  production: {
    dialect: 'postgres',
    host: 'monorail.proxy.rlwy.net',
    port: 57912,
    username: 'postgres',
    password: 'G-3cbAB3c135Ce2BF*63EcED41DfGAFd',
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
   
  },     */
};
