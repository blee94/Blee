const { Customer, Orders, Sequelize } = require("../model"); //model폴더에서 두개 불러왔음

const Op = Sequelize.Op; // 오퍼레이터 불러오기

exports.main = async (req, res) => {
  // customer의 주문 못록을 "custname"과 함께 보는방법
  const cust = await Customer.findAll({
    attributes: ["custid", "custname", "birth"],
    where: { birth: { [Op.gte]: "2000-01-01" } }, //조건걸고싶은거 (Op사용방법-문서보고 하기)
    include: [
      {
        model: Orders,
        attributes: { exclude: ["custid"] },
      },
    ],
  });
  res.send(cust);
};
