module.exports = (sequelize, DataTypes) => {
    const kelas_mentor = sequelize.define('kelas_mentor', {
        id_kelas_mentor: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },    
        id_kelas_materi: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        nama_mentor:{
            type: DataTypes.STRING,
            allowNull: false
        },
        status_mentor:{
            type: DataTypes.ENUM,
            values: ['Web Developer','Android Developer','Backend Developer','Frontend Developer','Fullstack Developer','UI/UX Developer'],
            allowNull: false
        },
        status:{
            type: DataTypes.ENUM,
            values: [1, 0],
            allowNull: false
        },
    }, {
        tableName: 'kelas_mentor'
    })
    return kelas_mentor;
};