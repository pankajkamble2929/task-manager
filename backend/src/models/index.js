const Sequelize = require('sequelize');
require('dotenv').config();

const dialect = process.env.DB_DIALECT || 'sqlite';

const sequelize = new Sequelize(
  process.env.DB_NAME || 'taskdb',
  process.env.DB_USER || '',
  process.env.DB_PASS || '',
  {
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || undefined,
    dialect,
    storage: process.env.DB_STORAGE || './db.sqlite',
    logging: false,
    dialectOptions: dialect === 'mysql' ? {
      ssl: {
        require: true,
        rejectUnauthorized: true, // Aiven requires SSL
      },
    } : {},
  }
);

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.Task = require('./task.model')(sequelize, Sequelize);

module.exports = db;
