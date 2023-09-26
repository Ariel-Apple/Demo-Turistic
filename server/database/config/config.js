require('dotenv').config();

module.exports = {
  development: {
    dialect: 'postgres',
    host: 'containers-us-west-199.railway.app',
    port: 8052,
    username: 'postgres',
    password: 'zFn4yMQm8TWKvWegGHKg',
    database: 'railway',

  },
  production: {
    dialect: 'postgres',
    host: 'containers-us-west-199.railway.app',
    port: 8052,
    username: 'postgres',
    password: 'zFn4yMQm8TWKvWegGHKg',
    database: 'railway',

  },  

/*    development: {
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
   
  },  */
};
