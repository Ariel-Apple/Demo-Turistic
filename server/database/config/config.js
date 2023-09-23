require('dotenv').config();

module.exports = {
  development: {
    dialect: 'postgres',
    host: process.env.DATABASE_URL || 'localhost',
    port: 5432,
    username: 'elari',
    password: 'Mwi5VpKFvabakGQo6xKXjpkej0Mj3q4Z',
    database: 'turistic',
    ssl: true,
    dialectOptions: {
      ssl: {
        require: true,
      },
    },
  },
  production: {
    dialect: 'postgres',
    host: process.env.DATABASE_URL || 'localhost',
    port: 5432,
    username: 'elari',
    password: 'Mwi5VpKFvabakGQo6xKXjpkej0Mj3q4Z',
    database: 'turistic',
    ssl: true,
    dialectOptions: {
      ssl: {
        require: true,
      },
    },
  },
};
