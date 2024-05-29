const express = require('express');
const router = express.Router();
// * Logout버튼 만들면 테스트 하기
router.get('/', function (req, res) {
    // 세션 삭제
    if (req.session) {
      req.session.destroy(err => {
        if (err) {
          console.error("세션 삭제 중 에러 발생:", err);
          return res.status(500).send("Internal Server Error");
        }
        // 세션 쿠키 삭제
        res.clearCookie('connect.sid', { path: '/' });
        console.log("로그아웃");
      });
    } else {
      console.log('이미 로그아웃');
    }
  });

  module.exports = router;
