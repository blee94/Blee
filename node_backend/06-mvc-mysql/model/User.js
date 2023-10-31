const mysql = require("mysql");
const cnn = mysql.createConnection({
  host: "localhost",
  user: "blee",
  password: "1123",
  database: "blee_test",
});

exports.post_signup = (data, cb) => {
  let sql = `INSERT INTO user(userid, name, pw) VALUES('${data.userid}','${data.name}','${data.pw}');`;
  cnn.query(sql, (err, result) => {
    if (err) {
      throw err;
    }
    cb();
  });
};

exports.post_signin = (data, cb) => {
  let sql = `SELECT * FROM user WHERE userid='${data.userid}' and pw='${data.pw}' limit 1;`;
  // limit 1: row length 가 0보다 크면 'true' ow 'false(err)'
  cnn.query(sql, function (err, rows) {
    if (err) {
      throw err;
    }
    cb(rows[0]);
  });
};
exports.get_user = (id, cb) => {
  let sql = `SELECT * FROM user WHERE id='${id}' limit 1;`;
  cnn.query(sql, function (err, rows) {
    if (err) {
      throw err;
    }
    cb(rows);
  });
};

exports.update_profile = (data, cb) => {
  let sql = `UPDATE user SET name='${data.name}', userid= '${data.userid}', pw='${data.pw}' WHERE id='${data.id}'`;
  cnn.query(sql, (err, result) => {
    if (err) {
      throw err;
    }
    cb();
  });
};
exports.delete_user = (id, cb) => {
  cnn.query(`DELETE FROM user WHERE id='${id}'`, (err) => {
    if (err) {
      throw err;
    }
    cb();
  });
};
