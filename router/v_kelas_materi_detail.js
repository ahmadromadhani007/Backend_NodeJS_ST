const express = require("express");
const router = express.Router();

const v_kelas_materi_detailCTRL = require("../controller/v_kelas_materi_detail");
const auth = require("../middleware/auth");

router.get("/v_kelas_materi_detail/", auth.isAuth, v_kelas_materi_detailCTRL.tampil);

module.exports = router;
