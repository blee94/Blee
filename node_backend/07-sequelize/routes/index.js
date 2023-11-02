const express = require("express");
const router = express.Router();
const controller = require("../controller/Cvisitor");

// 임시 라우터
router.get("/visitors/test/:id", controller.getTest);

// ~~~~~:8000 -> index.ejs render
router.get("/", controller.home);

// ~~~~~:8000/visitor -> visitor.ejs render
router.get("/visitors", controller.visitor);

// 방명록 등록
router.post("/visitor", controller.postVisitor);

// 방명록 수정
router.patch("/visitor", controller.patchVisitor);

// 방명록 하나 조회
router.get("/visitor/:id", controller.getVisitorById);
// 방명록 삭제
router.delete("/visitor/:id", controller.deleteVisitor);

// 회원가입 페이지
router.get("/signup", user.signup);
router.post("/signup", user.post_signup);

router.get("/signin", user.signin);
router.post("/signin", user.post_signin);

router.post("/profile", user.profile);
router.patch("/profile/edit/:id", user.profile_edit);
router.delete("/profile/delete/:id", user.profile_delete);

module.exports = router;
