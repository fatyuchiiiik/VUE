const { Sequelize } = require('sequelize')
const sequelize = new Sequelize('postgres://postgres:postgres@localhost:5432/DB1237') // тут вы должны указать свой пароль от бд

async function connect() {
    try {
        await sequelize.authenticate()
        console.log('db connected');
    }
    catch (error) {
        console.log(`error: ${error}`);
    }
}
connect()

module.exports = { sequelize }