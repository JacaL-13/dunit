const {Item} = require('../models/modItems')

module.exports = {
	getAllItems: async (req, res) => {
		try {
            const items = await Item.findAll({
                // where: {userId: req.params},
                // include: [{
                //     model: User,
                //     required: true,
                //     attributes: [`username`]
                // }]
            })
            res.status(200).send(items)
        } catch (error) {
            console.log('ERROR IN getAllItems')
            console.log(error)
            res.sendStatus(400)
        }
	}
}