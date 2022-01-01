module.exports = (sequelize, DataTypes) => {
    const kelas_materi_detail = sequelize.define('kelas_materi_detail', {
        id_kelas_materi_detail: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },    
        id_kelas_materi: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        materi_detail:{
            type: DataTypes.STRING,
            allowNull: false
        },
        url_video:{
            type: DataTypes.STRING,
            allowNull: false
        },
        created_at:{
            type: DataTypes.STRING,
            allowNull: false
        },
        updated_at:{
            type: DataTypes.STRING,
            allowNull: false
        },
    
    }, {
        tableName: 'kelas_materi_detail'
    })
    return kelas_materi_detail;
};