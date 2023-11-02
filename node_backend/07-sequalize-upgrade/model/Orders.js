function Orders(sequelize, DataTypes) {
  return sequelize.define(
    "orders",
    {
      orderid: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      custid: {
        type: DataTypes.STRING(10),
        allowNull: false,
      },
      prodname: {
        type: DataTypes.STRING(6),
        allowNull: false,
      },
      price: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      amount: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      tableName: "orders",
      freezeTableName: true,
      timestamps: false,
    }
  );
}
module.exports = Orders; //model/index로 넘겨줌
