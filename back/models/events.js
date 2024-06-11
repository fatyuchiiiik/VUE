const { sequelize } = require('../connection')
const { DataTypes } = require('sequelize')

const event = sequelize.define(
  'event',
  {
    id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,

    },
    uid: {
      type: DataTypes.UUID,
      primaryKey: true
    },
    title: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    bodyText: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    likes: {
        type: DataTypes.BIGINT,
        
      }
  },
  {
    tableName: 'events',
    timestamps: true,
  }
)

async function get_events_table() {
  await event.sync()
  console.log('Синхрон');
}
module.exports = { event, get_events_table }