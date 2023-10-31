const Sequelize = require("sequelize");
const config = require("../config/config.json")["development"];

const db = {};
const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);
// sequelize 객체를 만든다

db.sequelize = sequelize;
db.Sequelize = Sequelize;
// db = { sequelize : sequelize, Sequelize: Sequelize} 형태로 저장됨

// const Visitor = require("./Visitor")
// db.Visitor = Visitor(sequelize, Sequelize)
db.Visitor = require("./Visitor")(sequelize, Sequelize);
// db.Visitor에는 sequelize로 visitor 테이블의 정의한 객체를 담음.

module.exports = db;
