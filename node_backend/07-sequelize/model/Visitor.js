// 테이블의 구조를 정의
// orm은 객체와 db의 table을 매핑하는 기술
// sequelize를 이용해서 table의 구조를 정의할 필요가 있음.

function Visitor(Sequelize, DataTypes) {
  return Sequelize.define(
    "visitor", //테이블 이름
    {
      id: {
        // int NOT NULL AUTO_INCREMENT PRIMARY KEY,
        type: DataTypes.INTEGER,
        allowNull: false, //기본값 true
        primaryKey: true, //기본값 false
        autoIncrement: true, // 기본값 false
      },
      username: {
        type: DataTypes.STRING(10),
      },
      comment: {
        type: DataTypes.TEXT("medium"),
      },
    }, //컬럼 정의

    {
      tableName: "visitor",
      freezeTableName: true,
      // 테이블 네임을 고정시킨다. sequelize에서 간혹 단수로 지정해둔 테이블 이름을 sql문을 날릴때 복수로 변경을 시키는 경우가 있기 때문.
      timestamps: false, // insert, update시에 그 시간을 자동으로 저장하는 옵션. 기본값 true. createAt, updateAt 컬럼을 만들지 않으면 오류가 남.
    }
  ); // 모델(테이블) 정의, sequelize객체의 define 메소드를 이용해서 정의
}

module.exports = Visitor;
