const express = require("express");
const router = express.Router();

const kelas_materi_detailCTRL = require("../controller/kelas_materi_detail");
const auth = require("../middleware/auth");

router.post("/kelas_materi_detail", auth.isAuth, kelas_materi_detailCTRL.simpan);
router.put("/kelas_materi_detail/:id_kelas_materi_detail",  auth.isAuth, kelas_materi_detailCTRL.edit);
router.delete("/kelas_materi_detail/:id_kelas_materi_detail",  auth.isAuth, kelas_materi_detailCTRL.hapus);

module.exports = router;
