const mysql = require("mysql");

// createConnection : mysql 연결 정보를 받아서 mysql과 연결
// db 연결한다 > host, user, password, database 이름
const conn = mysql.createConnection({
  host: "localhost",
  user: "user",
  password: "1123",
  database: "blee_test",
});

// exports.getVisitors = () => {
//   return [
//     { id: 1, username: "홍길동", comment: "내가 왔다." },
//     { id: 2, username: "이찬혁", comment: "으라차차" },
//   ];
// };

exports.getVisitors = (cb) => {
  conn.query(`SELECT * FROM visitor`, (err, rows) => {
    // err 변수가 빈 값이 아니라면, err가 발생했다는 것.
    if (err) {
      throw err;
    }

    console.log("visitor", rows);
    cb(rows);
  });
};

exports.insertVisitor = (data, cb) => {
  // insert into visitor (username, comment) values ('????', '?????')
  const sql = `insert into visitor (username, comment) values ('${data.username}', '${data.comment}')`;

  conn.query(sql, (err, result) => {
    // err 변수가 빈 값이 아니라면, err가 발생했다는 것.
    if (err) {
      throw err;
    }

    console.log("visitor insert", result);
    cb(result.insertId);
  });
};

exports.delVisitor = (id, cb) => {
  const sql = `delete from visitor where id = ${id}`;

  conn.query(sql, (err, result) => {
    if (err) {
      throw err;
    }

    let flag = false;
    if (result.affectedRows) {
      flag = true;
    }

    console.log("visitor delete", result);
    cb(flag);
    // cb(true);
  });
};

exports.getVisitorById = (id, cb) => {
  conn.query(`SELECT * FROM visitor WHERE id=${id}`, (err, rows) => {
    if (err) {
      throw err;
    }

    console.log("Visitor.js: ", rows);
    cb(rows[0]);
  });
};

exports.patchVisitor = (data, cb) => {
  const sql = `UPDATE visitor SET username='${data.name}', comment='${data.comment}' WHERE id=${data.id}`;
  conn.query(sql, (err, result) => {
    if (err) {
      throw err;
    }

    console.log("Visitor.js: ", result);
    cb(result);
  });
};

// --------------------회원가입-----------------------

exports.post_signup = (data, cb) => {
  let sql = `INSERT INTO user(userid, name, pw) VALUES('${data.userid}','${data.name}','${data.pw}');`;
  cnn.query(sql, function (err) {
    if (err) throw err;
    cb();
  });
};

exports.post_signin = (data, cb) => {
  let sql = `SELECT * FROM user WHERE userid='${data.userid}' and pw='${data.pw}' limit 1;`;
  cnn.query(sql, function (err, rows) {
    if (err) throw err;
    cb(rows);
  });
};
exports.get_user = (id, cb) => {
  let sql = `SELECT * FROM user WHERE id='${id}' limit 1;`;
  cnn.query(sql, function (err, rows) {
    if (err) throw err;
    cb(rows);
  });
};

exports.update_profile = (data, cb) => {
  let sql = `UPDATE user SET name='${data.name}', pw='${data.pw}' WHERE id='${data.id}'`;
  cnn.query(sql, (err) => {
    if (err) throw err;
    cb();
  });
};
exports.delete_user = (id, cb) => {
  cnn.query(`DELETE FROM user WHERE id='${id}'`, (err) => {
    if (err) throw err;
    cb();
  });
};
