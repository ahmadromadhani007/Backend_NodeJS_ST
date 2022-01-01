const express = require("express");
const router = express.Router();

const v_join_materiCTRL = require("../controller/v_join_materi");
const auth = require("../middleware/auth");

router.get("/v_join_materi/", auth.isAuth, v_join_materiCTRL.tampil);

module.exports = router;
