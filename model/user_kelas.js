module.exports = (sequelize, DataTypes) => {
    const user_kelas = sequelize.define('user_kelas', {
        id_user_kelas: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },    
        id_user: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        id_kelas_materi:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        token:{
            type: DataTypes.STRING,
            allowNull: false
        },
        verifikasi:{
            type: DataTypes.ENUM,
            values:[1, 0],
            allowNull: false
        },
        tanggal_daftar:{
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        tableName: 'user_kelas'
    })
    return user_kelas;
};