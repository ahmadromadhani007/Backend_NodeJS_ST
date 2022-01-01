module.exports = (sequelize, DataTypes) => {
    const user = sequelize.define('user', {
        id_user: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },    
        nama: {
            type: DataTypes.STRING,
            allowNull: false
        },
        jenis_kelamin:{
            type: DataTypes.ENUM,
            values:['L', 'P'],
            allowNull: false
        },
        email:{
            type: DataTypes.STRING,
            allowNull: false
        },
        telepon:{
            type: DataTypes.STRING,
            allowNull: false
        },
        password:{
            type: DataTypes.STRING,
            allowNull: false
        },
        token:{
            type: DataTypes.STRING,
            allowNull: false
        },
        status:{
            type: DataTypes.ENUM,
            values:[1, 0],
            allowNull: false
        }
    
    }, {
        tableName: 'user'
    })
    return user;
};