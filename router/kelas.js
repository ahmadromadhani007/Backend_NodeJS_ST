const express = require("express");
const router = express.Router();

const kelasCTRL = require("../controller/kelas");
const auth = require("../middleware/auth");

router.get("/kelas/", auth.isAuth, kelasCTRL.tampil);
router.get("/kelas/:id_kelas", auth.isAuth, kelasCTRL.cari);
router.post("/kelas", auth.isAuth, kelasCTRL.simpan);
router.put("/kelas/:id_kelas",  auth.isAuth, kelasCTRL.edit);
router.delete("/kelas/:id_kelas",  auth.isAuth, kelasCTRL.hapus);

module.exports = router;
