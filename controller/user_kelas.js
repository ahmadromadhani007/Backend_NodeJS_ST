const {
    user_kelas
} = require("../model");

module.exports = {
    async simpan(req, res, next) {
        try {
            const {
                id_user,
                id_kelas_materi,
                token,
                verifikasi,
                tanggal_daftar
            } = req.body;
            await user_kelas.create({
                id_user,
                id_kelas_materi,
                token,
                verifikasi,
                tanggal_daftar
            }).then(result => {
                return res.status(201).json({
                    success: 1,
                    message: 'Berhasil Tersimpan',
                    data: result,
                });
            }).catch(error => {
                return res.status(400).json({
                    success: 0,
                    message: error.message
                });
            });
        } catch (error) {
            return res.status(400).json({
                success: 0,
                message: error.message
            })
        }
    },
    async edit(req, res, next) {
        try {
            const {
                id_user,
                id_kelas_materi,
                token,
                verifikasi,
                tanggal_daftar
            } = req.body;
            await user_kelas.update({
                id_user,
                id_kelas_materi,
                token,
                verifikasi,
                tanggal_daftar
            }, {
                where: {
                    id_user_kelas: req.params.id_user_kelas
                }
            }).then(result => {
                if (result == 1) {
                    return res.status(201).json({
                        success: 1,
                        message: 'Telah diperbarui',
                    })
                } else {
                    return res.status(400).json({
                        success: 0,
                        message: 'Tidak ada perbaruan data',
                    })
                }
            }).catch(error => {
                return res.status(400).json({
                    success: 0,
                    message: error.message
                });
            });
        } catch (error) {
            return res.status(400).json({
                success: 0,
                message: error.message
            })
        }
    },
    async hapus(req, res, next) {
        try {
            await user_kelas.destroy({
                where: {
                    id_user_kelas: req.params.id_user_kelas
                }
            });
            return res.status(200).json({
                success: 1,
                message: "Data Telah dihapus",
            });
        } catch (error) {
            return res.status(400).json({
                success: 0,
                message: error.message
            });
        }
    }
}