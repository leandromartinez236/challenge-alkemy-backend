const Sequelize = require("sequelize");

const sequelize = new Sequelize("challengealkemy", "postgres", "root", {
  host: "localhost",
  dialect: "postgres",
});

module.exports = {
  sequelize,
};
