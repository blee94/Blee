const express = require("express");
const user = require("../controller/Cuser");
const router = express.Router();
// index 페이지 렌더
router.get("/", user.index);

// 회원가입 페이지 렌더
router.get("/signup", user.signup);
// 회원가입 버튼 클릭 렌더
router.post("/signup", user.post_signup);

// 로그인 페이지 렌더
router.get("/signin", user.signin);
// 로그인 버튼 클릭 렌더
router.post("/signin", user.post_signin);

// 프로필 페이지 렌더 (임시. 일반 POST 전송. 왜? 로그인을 유지시킬수 있는 기술 아직 모름)
router.post("/profile", user.profile);
// 회원정보 수정 버튼 클릭 렌더
router.patch("/profile/edit/:id", user.profile_edit);
// 회원 탈퇴 버튼 클릭 렌더
router.delete("/profile/delete/:id", user.profile_delete);

module.exports = router;
