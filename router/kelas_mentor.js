const express = require("express");
const router = express.Router();

const kelas_mentorCTRL = require("../controller/kelas_mentor");
const auth = require("../middleware/auth");

router.get("/kelas_mentor/", auth.isAuth, kelas_mentorCTRL.tampil);
router.get("/kelas_mentor/:id_kelas_mentor", auth.isAuth, kelas_mentorCTRL.cari);
router.post("/kelas_mentor", auth.isAuth, kelas_mentorCTRL.simpan);
router.put("/kelas_mentor/:id_kelas_mentor",  auth.isAuth, kelas_mentorCTRL.edit);
router.delete("/kelas_mentor/:id_kelas_mentor",  auth.isAuth, kelas_mentorCTRL.hapus);

module.exports = router;
