const express = require("express");
const router = express.Router();

const user_kelas_materi_detailCTRL = require("../controller/user_kelas_materi_detail");
const auth = require("../middleware/auth");

router.post("/user_kelas_materi_detail", auth.isAuth, user_kelas_materi_detailCTRL.simpan);
router.put("/user_kelas_materi_detail/:id_user_kelas_materi_detail", auth.isAuth, user_kelas_materi_detailCTRL.edit);

module.exports = router;
