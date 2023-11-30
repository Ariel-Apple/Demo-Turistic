require('dotenv').config();

module.exports = {
development: {
    dialect: 'postgres',
    host: 'monorail.proxy.rlwy.net',
    port: 32379,
    username: 'postgres',
    password: 'aA41d-g2E1-fd-AG5EF61EDD3*AABD*f',
    database: 'railway',

  },
  production: {
    dialect: 'postgres',
    host: 'monorail.proxy.rlwy.net',
    port: 32379,
    username: 'postgres',
    password: 'aA41d-g2E1-fd-AG5EF61EDD3*AABD*f',
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
   
  },    */
};
