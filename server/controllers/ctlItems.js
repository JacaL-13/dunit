const { Item } = require('../models/modItems')

module.exports = {
	getAllItems: async (req, res) => {
		try {
			const items = await Item.findAll({
				order: [['createdAt']]
				// where: {userId: req.params},
				// include: [{
				//     model: User,
				//     required: true,
				//     attributes: [`username`]
				// }]
			})
			res.status(200).send(items)
		} catch (error) {
			console.error('ERROR IN getAllItems')
			console.error(error)
			res.sendStatus(400)
		}
	},
	updateItem: async (req, res) => {
		try {
			const { itemId, textContent, startDate, endDate, dun } = req.body
			await Item.update(
				{
					textContent: textContent,
					startDate: startDate,
					endDate: endDate,
					dun: dun
				},
				{ where: { itemId: itemId } }
			)
			res.sendStatus(200)
		} catch (error) {
			console.error('Error in updateItem')
			console.error(error)
			res.sendStatus(400)
		}
	},
	addItem: async (req, res) => {
		try {
			const { newId, parentId } = req.body
			await Item.create({ itemId: newId, parentId, dun: false })
			res.sendStatus(200)
		} catch (error) {
			console.error('Error in addItem')
			console.error(error)
			res.sendStatus(400)
		}
	},
	delItem: async (req, res) => {
		try {
			await Item.destroy({ where: { itemId: req.params.itemid } })
			res.sendStatus(200)
		} catch (error) {
			console.error('Error in delItem')
			console.error(error)
			res.sendStatus(400)
		}
	}
}
