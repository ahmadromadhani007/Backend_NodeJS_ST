const express = require("express");
const router = express.Router();

const v_kelas_materiCTRL = require("../controller/v_kelas_materi");
const auth = require("../middleware/auth");

router.get("/v_kelas_materi/", auth.isAuth, v_kelas_materiCTRL.tampil);

module.exports = router;
