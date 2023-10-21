const express = require("express");
const multer = require("multer");
const path = require("path");

const app = express();
const PORT = 8000;

app.use("/uploads", express.static(__dirname + "/uploads"));

const upload = multer({
  dest: "uploads/",
});

const uploadDetail = multer({
  storage: multer.diskStorage({
    destination: function (req, file, done) {
      done(null, "uploads/");
    },
    filename: function (req, file, done) {
      console.log(file);
      const ext = path.extname(file.originalname);
      const basename = path.basename(file.originalname, ext);
      const filename = basename + "_" + Date.now() + ext;

      done(null, filename);
    },
  }),

  limits: { fileSize: 5 * 1024 * 1024 },
});

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.render("prac");
});

// app.post("/prac", uploadDetail.single("userfile"), function (req, res) {
//   console.log("file detail:", req.file);
//   console.log("file detail:", req.body);
//   res.render("result2", {
//     src: req.file.path,
//     id: req.body.id,
//     pw: req.body.pw,
//     name: req.body.name,
//     age: req.body.age,
//   });
// });

app.post(
  "/axios/dynamic",
  uploadDetail.single("userfile"),
  function (req, res) {
    res.send({ src: req.file.path });
    console.log(req.body);
  }
);

app.listen(PORT, function () {
  console.log(`Sever Open: ${PORT}`);
});
