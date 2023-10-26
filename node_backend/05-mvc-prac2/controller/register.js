exports.main = (req, res) => {
  res.render("index");
};

exports.register = (req, res) => {
  console.log(req.query);
  res.send(req.query);
};
