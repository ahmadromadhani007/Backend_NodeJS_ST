module.exports = (sequelize, DataTypes) => {
    const v_join_materi_detail = sequelize.define('v_join_materi_detail', {
        id_user_kelas_materi_detail: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },    
        id_kelas_materi_detail: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        id_kelas_materi:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        histori:{
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
        }
    }, {
        tableName: 'v_join_materi_detail'
    })
    return v_join_materi_detail;
};