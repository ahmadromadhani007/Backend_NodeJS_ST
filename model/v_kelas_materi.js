module.exports = (sequelize, DataTypes) => {
    const v_kelas_materi = sequelize.define('v_kelas_materi', {
        id_kelas: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
         nama_kelas:{
            type: DataTypes.STRING,
            allowNull: false
        },
        kategori_kelas:{
            type: DataTypes.STRING,
            allowNull: false
        },
        harga_kelas:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        status_kelas:{
            type: DataTypes.STRING,
            allowNull: false
        },
    }, {
        tableName: 'v_kelas_materi'
    })
    return v_kelas_materi;
};