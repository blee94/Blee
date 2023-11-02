// 테이블의 구조를 정의
// orm 은 객체와 db의 table을 매핑하는 기술
// sequelize를 이용해서 table의 구조를 정의할 필요가 있음.

function User(Sequelize, DataTypes) {
  return Sequelize.define(
    // 모델(테이블) 정의, sequelize 객체의 define 메소드를 이용해서
    "user", // 테이블 이름
    {
      id: {
        // int NOT NULL AUTO_INCREMENT PRIMARY KEY,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      userid: {
        //  varchar(10),
        type: DataTypes.STRING(10),
      },
      name: {
        type: DataTypes.TEXT("medium"),
      },
      pw: {
        type: DataTypes.TEXT("medium"),
      },
    },
    {
      tableName: "user",
      freezeTableName: true,
      timestamps: false,
    }
  );
}

module.exports = User;
