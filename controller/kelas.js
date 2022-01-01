const {
    kelas
} = require("../model");

module.exports = {
    async tampil(req, res, next) {
        try {
            await kelas.findAll().then(result => {
                if (result.length > 0) {
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
    async cari(req, res, next) {
        try {
            await kelas.findOne({
                where: {
                    id_kelas: req.params.id_kelas,
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
                nama_kelas,
                kategori_kelas,
                status_kelas,
            } = req.body;
            await kelas.create({
                nama_kelas,
                kategori_kelas,
                status_kelas,
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
                nama_kelas,
                kategori_kelas,
                status_kelas,
            } = req.body;
            await kelas.update({
                nama_kelas,
                kategori_kelas,
                status_kelas,
            }, {
                where: {
                    id_kelas: req.params.id_kelas
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
            await kelas.destroy({
                where: {
                    id_kelas: req.params.id_kelas
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