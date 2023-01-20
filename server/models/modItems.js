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

// reference: 'parent1',
// 			itemId: '47741334-d1fd-4806-944b-006834300cd4',
// 			parentId: null,
// 			textContent: 'This is a parent item.',
// 			startDate: null,
// 			endDate: null,
// 			hasChldrn: true,
// 			dun: false