const { DataTypes, UUID, UUIDV4 } = require('sequelize')

const { sequelize } = require('../utils/database')

module.exports = {
	User: sequelize.define('users', {
		userId: {
			type: UUID,
			defaultValue: UUIDV4,
			allowNull: false,
			primaryKey: true
		},
		username: DataTypes.STRING,
		passhash: DataTypes.STRING
	})
}
