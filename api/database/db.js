const Sequelize = require("sequelize");
const pg = require("pg");
require("dotenv");
const sequelize = new Sequelize("challengealkemy", "postgres", "root", {
  host: "localhost",
  dialect: "postgres",
  dialectModule: pg,
});

module.exports = {
  sequelize,
};
