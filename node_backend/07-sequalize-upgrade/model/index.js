const Sequelize = require("sequelize");

const config = require("../config/config.json")["development"];

const db = {};
const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.Customer = require("./Customer")(sequelize, Sequelize); //model/ Customer에서 받아왔음
db.Orders = require("./Orders")(sequelize, Sequelize); //model/ Orders에서 받아왔음

db.Customer.hasMany(db.Orders, {
  foreignKey: "custid",
  //   sourceKey: "custid", //targetKey대신 이거 써야함
});
db.Orders.belongsTo(db.Customer, {
  foreignKey: "custid",
  // onDelete:"cascade", // 삭제할때 묶어서 같이 지우는 옵션.
  //   targetKey: "custid", //이름이 바뀌면 바뀐 이름을 써주기. 안써도 됌.
});

module.exports = db;
