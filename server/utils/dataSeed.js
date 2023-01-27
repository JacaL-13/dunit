const { Item } = require('../models/modItems')

// Item: sequelize.define('items', {
// 	itemId: {
// 		type: UUID,
// 		defaultValue: UUIDV4,
// 		allowNull: false,
// 		primaryKey: true
// 	},
// 	parentId: DataTypes.UUID,
// 	textContent: DataTypes.STRING,
// 	startDate: DataTypes.DATE,
// 	endDate: DataTypes.DATE,
// 	dun: DataTypes.BOOLEAN
// })

module.exports = {
	seedDatabase: () => {
		const devData = [
			{
				reference: 'parent1',
				itemId: '47741334-d1fd-4806-944b-006834300cd4',
				parentId: null,
				textContent: 'Item 1',
				startDate: null,
				endDate: null,
				hasChldrn: true,
				dun: false
			},
			{
				reference: 'parent2',
				itemId: '8a21feba-c37a-420f-8348-27535581ca60',
				parentId: null,
				textContent: 'Item 2',
				startDate: null,
				endDate: null,
				hasChldrn: true,
				dun: false
			},
			{
				reference: 'child1',
				itemId: '076c4c66-6052-432b-b463-289c22b64c31',
				parentId: '47741334-d1fd-4806-944b-006834300cd4',
				textContent: 'Item 1-1',
				startDate: '2023-01-19',
				endDate: '2023-01-26',
				hasChldrn: true,
				dun: true
			},
			{
				reference: 'child2',
				itemId: '80453243-99e5-4cac-a4cc-e1733cf2c57d',
				parentId: '47741334-d1fd-4806-944b-006834300cd4',
				textContent: 'Item 1-2',
				startDate: null,
				endDate: null,
				hasChldrn: false,
				dun: false
			},
			{
				reference: 'child3',
				itemId: '96883a07-5ed2-4cd7-aa09-8960e91197dc',
				parentId: '8a21feba-c37a-420f-8348-27535581ca60',
				textContent: 'Item 2-1',
				startDate: null,
				endDate: null,
				hasChldrn: false,
				dun: false
			},
			{
				reference: 'grChild1',
				itemId: '9aa00e26-e651-4f77-bf6a-a00211c5d8d6',
				parentId: '076c4c66-6052-432b-b463-289c22b64c31',
				textContent: 'Item 1-1-1',
				startDate: null,
				endDate: null,
				hasChldrn: true,
				dun: false
			},
			{
				reference: 'greGrChild1',
				itemId: '1819879c-abaf-4f4b-a1cb-d109e940fad5',
				parentId: '9aa00e26-e651-4f77-bf6a-a00211c5d8d6',
				textContent: 'Item 1-1-1-1',
				startDate: null,
				endDate: null,
				hasChldrn: false,
				dun: false
			}
		]

		try {
			for (let i = 0; i < devData.length; i++) {
				const {itemId, parentId, textContent, startDate, endDate, dun } = devData[i]

				Item.create({
					itemId,
					parentId,
					textContent,
					startDate,
					endDate,
					dun
				})
			}
		} catch (error) {
			console.error(error)
		}
	}
}
