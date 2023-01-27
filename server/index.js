const { sequelize } = require('./utils/database')
const { Item } = require('./models/modItems')

const express = require('express')
const cors = require('cors')

const { SERVER_PORT } = process.env

const app = express()
app.use(express.json())
app.use(cors())

Item.hasMany(Item, { foreignKey: 'parentId' })

const { getAllItems, updateItem, addItem, delItem } = require('./controllers/ctlItems')

app.get('/items', getAllItems)
app.put('/items/', updateItem)
app.post('/items', addItem)
app.delete('/items/:itemid', delItem)

const { seedDatabase } = require('./utils/dataSeed')
const seed = true

if (seed) {
	sequelize
		.sync({ force: true })
		.then(() => {
			seedDatabase()
			app.listen(SERVER_PORT, () => console.log(`Database seeded. Server running on port ${SERVER_PORT}`))
		})
		.catch((err) => console.error(err))
} else {
	app.listen(SERVER_PORT, () => console.log(`server running on port ${SERVER_PORT}`))
}
