const Sequelize = require("sequelize");
const pg = require("pg");
require("dotenv").config();
const sequelize = new Sequelize(
  process.env.DB,
  "postgres",
  process.env.password,
  {
    host: "localhost",
    dialect: "postgres",
    dialectModule: pg,
  }
);

module.exports = {
  sequelize,
};
