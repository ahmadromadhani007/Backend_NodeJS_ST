module.exports = (sequelize, DataTypes) => {
    const v_kelas_mentor = sequelize.define('v_kelas_mentor', {
        id_kelas_materi: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },    
        id_kelas: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        nama_materi:{
            type: DataTypes.STRING,
            allowNull: false
        },
        harga_kelas:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        status:{
            type: DataTypes.ENUM,
            values: [1, 0],
            allowNull: false
        },
    }, {
        tableName: 'v_kelas_mentor'
    })
    return v_kelas_mentor;
};