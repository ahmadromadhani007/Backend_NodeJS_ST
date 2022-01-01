const {
    user
} = require("../model");

module.exports = {
    async cari(req, res, next) {
        try {
            await user.findOne({
                where: {
                    id_user: req.params.id_user,
                }
            }).then(result => {
                if (result != null) {
                    return res.status(200).json({
                        success: 1,
                        data: result
                    });
                } else {
                    return res.status(400).json({
                        success: 0,
                        message: "tidak ditemukan...",
                    });
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
            });
        }
    },
    async simpan(req, res, next) {
        try {
            const {
                nama,
                jenis_kelamin,
                email,
                telepon,
                password,
                token,
                status
            } = req.body;
            await user.create({
                nama,
                jenis_kelamin,
                email,
                telepon,
                password,
                token,
                status
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
                nama,
                jenis_kelamin,
                email,
                telepon,
                password,
                token,
                status
            } = req.body;
            await user.update({
                nama,
                jenis_kelamin,
                email,
                telepon,
                password,
                token,
                status
            }, {
                where: {
                    id_user: req.params.id_user
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
            await user.destroy({
                where: {
                    id_user: req.params.id_user
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