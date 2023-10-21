const express = require("express");
const multer = require("multer"); // multer 불러오기
const path = require("path"); // path: 파일 경로를 받았을 때 그 조작을 도와준다. ex) 확장자 추출, 파일 이름 추출

console.log("hi.txt의 확장자:", path.extname("hi.txt"));
console.log("hi.txt의 이름:", path.basename("hi.txt", path.extname("hi.txt")));

const app = express();
const PORT = 8000;

// **클라이언트가 uploads 폴더에 저장한 이미지 파일에 접근할 수 있도록 미들웨어 작성**
app.use("/uploads", express.static(__dirname + "/uploads"));

// upload라는 객체 안에는 미들웨어 함수가 존재함. single(), array()등
// 미들웨어: 요청과 응답 사이에 존재.
// multer가 임의의 문자열을 생성해서 그 문자열을 파일 이름으로 만듦. 확장자도 안붙여줌;
const upload = multer({
  dest: "uploads/", // uploads 라는 폴더를 생성
});

const uploadDetail = multer({
  storage: multer.diskStorage({
    // 파일 경로 지정
    destination: function (req, file, done) {
      done(null, "uploads/");
    },
    // 파일 이름 지정
    filename: function (req, file, done) {
      console.log(file); // file.originalname: 미니언.webp
      const ext = path.extname(file.originalname); // 불러오는 파일이름의 확장자를 불러온다(.webp)
      const basename = path.basename(file.originalname, ext); // 불러오는 파일이름의 이름을 불러온다(미니언)

      const filename = basename + "_" + Date.now() + ext;

      done(null, filename);
    },
  }),

  limits: { fileSize: 5 * 1024 * 1024 }, // 예시) 5MB으로 파일크기 제한
});

// ------파일 업로드의 구조 정리---------

// storage: 파일을 저장할 정보
//  -- diskStorage: 파일을 disk에 저장하기 위한 기능을 제공하는 메소드
//  ---- destination: 파일이 저장 될 경로
//  ---- filename: 파일이 저장 될 이름

// limits
// -- fileSize: 파일의 최대 크기

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.render("index");
});

// single: 미들웨어. => 클라이언트가 보낸 요청 중에 ("name")파일 데이터가 있다면, 파일을 저장을 해서 req.file이라는 객체를 생성해서 다음 함수에 넘겨줌.
// single: 파일을 하나만 업로드 할때 사용 -> req 파일 생성
app.post("/upload", upload.single("userfile"), function (req, res) {
  console.log("file:", req.file);
  console.log("body:", req.body);
  res.send("파일 업로드");
});

app.post(
  "/upload/detail",
  uploadDetail.single("userfile"),
  function (req, res) {
    console.log("file detail:", req.file);
    console.log("file detail:", req.body);
    // res.send("파일 업로드");

    res.render("result", {
      src: req.file.path,
      title: req.body.title,
    });
  }
);

// array(): 파일 여러개 업로드 (name(input) 하나로 여러개의 파일을 받는 방법). default는 하나만 가능.
// req.files 생성
app.post("/upload/array", uploadDetail.array("userfile"), function (req, res) {
  console.log("file 여러개:", req.files);
  res.send("여러개 업로드 성공");
});

// array(): 파일 여러개 업로드. name이 두개 이상(input이 2개 이상)
app.post(
  "/upload/fields",
  uploadDetail.fields([{ name: "userfile1" }, { name: "userfile2" }]),
  function (req, res) {
    console.log("file 여러개:", req.files);
    console.log("req.body:", req.body);

    res.send("여러개 업로드 성공");
  }
);

app.post(
  "/upload/dynamic",
  uploadDetail.single("userfile"),
  function (req, res) {
    res.send({ src: req.file.path });
  }
);

app.listen(PORT, function () {
  console.log(`Sever Open: ${PORT}`);
});
