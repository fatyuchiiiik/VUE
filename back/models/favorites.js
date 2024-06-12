const { sequelize } = require('../connection');
const { DataTypes } = require('sequelize');

const favorite = sequelize.define('favorite',
    {
    id:{
        type:DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true
    },
    user_uid:{
        type: DataTypes.TEXT,
        allowNull: false
    },
    event_uid:{
        type: DataTypes.TEXT,
        allowNull:false
    },
    created_at:{
        type: DataTypes.DATE,
        allowNull:false,
        defaultValue: DataTypes.NOW
    }
    },
    {
        tableName: 'favorites',
        timestamps:false
    }
);
async function get_favorite_table(){
    await favorite.sync()
    console.log('okk');
}
module.exports = {favorite, get_favorite_table}