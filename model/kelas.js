module.exports = (sequelize, DataTypes) => {
    const kelas = sequelize.define('kelas', {
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
            type: DataTypes.ENUM,
            values:['Free', 'Freemium', 'Premium'],
            allowNull: false
        },
        status_kelas:{
            type: DataTypes.ENUM,
            values:[1, 0],
            allowNull: false
        },
    }, {
        tableName: 'kelas'
    })
    return kelas;
};