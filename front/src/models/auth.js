const { sequelize } = require('C:\Users\admin\Desktop\Кудреватых\VUE\back\connection.js')
const { DataTypes } = require('sequelize')

const auth = sequelize.define(
    'auth',
    {
        id: {
            type: DataTypes.BIGINT,
            autoIncrement: true,
            primaryKey: true
        },
        uid: {
            type: DataTypes,UUID
        },
        role: {
            type: DataTypes.TEXT
        },
        AccessToken: {
            type: DataTypes.TEXT
        },
        RefreshToken: {
            type: DataTypes.TEXT
        },
        password: {
            type: DataTypes.TEXT
        },
        email: {
            type: DataTypes.TEXT
        },
    },
    {
        tableName: 'auth',
        timestamps: true
    }
)

async function get_auth_table() {
    await auth.sync()
    console.log('Синхронизация выполнена');
}
module.export = { auth, get_auth_table }