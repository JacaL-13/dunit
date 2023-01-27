const { DataTypes, UUID, UUIDV4 } = require('sequelize')

const { sequelize } = require('../utils/database')

module.exports = {
	Item: sequelize.define('items', {
		itemId: {
			type: UUID,
			defaultValue: UUIDV4,
			allowNull: false,
			primaryKey: true
		},
		parentId: DataTypes.UUID,
		textContent: DataTypes.STRING,
		startDate: DataTypes.DATE,
		endDate: DataTypes.DATE,
		dun: DataTypes.BOOLEAN
	})
}
