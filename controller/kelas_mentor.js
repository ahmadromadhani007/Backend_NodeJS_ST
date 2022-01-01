const {
    kelas_mentor
} = require("../model");

module.exports = {
    async tampil(req, res, next) {
        try {
            await kelas_mentor.findAll().then(result => {
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
            await kelas_mentor.findOne({
                where: {
                    id_kelas_mentor: req.params.id_kelas_mentor,
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
                id_kelas_materi,
                nama_mentor,
                status_mentor,
                status
            } = req.body;
            await kelas_mentor.create({
                id_kelas_materi,
                nama_mentor,
                status_mentor,
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
                id_kelas_materi,
                nama_mentor,
                status_mentor,
                status
            } = req.body;
            await kelas_mentor.update({
                id_kelas_materi,
                nama_mentor,
                status_mentor,
                status
            }, {
                where: {
                    id_kelas_mentor: req.params.id_kelas_mentor
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
            await kelas_mentor.destroy({
                where: {
                    id_kelas_mentor: req.params.id_kelas_mentor
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