const express = require("express");
const router = express.Router();

const user_kelasCTRL = require("../controller/user_kelas");
const auth = require("../middleware/auth");

router.post("/user_kelas", auth.isAuth, user_kelasCTRL.simpan);
router.put("/user_kelas/:id_user_kelas",  auth.isAuth, user_kelasCTRL.edit);
router.delete("/user_kelas/:id_user_kelas",  auth.isAuth, user_kelasCTRL.hapus);

module.exports = router;
