const express = require("express");
const router = express.Router();

const kelas_materiCTRL = require("../controller/kelas_materi");
const auth = require("../middleware/auth");

router.get("/kelas_materi/", auth.isAuth, kelas_materiCTRL.tampil);
router.get("/kelas_materi/:id_kelas_materi", auth.isAuth, kelas_materiCTRL.cari);
router.post("/kelas_materi", auth.isAuth, kelas_materiCTRL.simpan);
router.put("/kelas_materi/:id_kelas_materi",  auth.isAuth, kelas_materiCTRL.edit);
router.delete("/kelas_materi/:id_kelas_materi",  auth.isAuth, kelas_materiCTRL.hapus);

module.exports = router;
