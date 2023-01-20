const { sequelize } = require('./utils/database')
const {Item} = require('./models/modItems')

const express = require('express')
const cors = require('cors')

require('dotenv').config()
const { PORT } = process.env

const app = express()
app.use(express.json())
app.use(cors())

Item.hasMany(Item, { foreignKey: 'parentId' })

const {getAllItems} = require('./controllers/ctlItems')

app.get('/items', getAllItems)

// app.post('/register', register)
// app.post('/login', login)
// app.get('/userposts/:userId', getCurrentUserPosts)
// app.post('/posts', isAuthenticated, addPost)
// app.put('/posts/:id', isAuthenticated, editPost)
// app.delete('/posts/:id', isAuthenticated, deletePost)

const {seedDatabase} = require('./utils/dataSeed')
const seed = false

if (seed) {
sequelize
	.sync({ force: true })
	.then(() => {
		seedDatabase()
		app.listen(PORT, () => console.log(`Database seeded. Server running on port ${PORT}`))
	})
	.catch((err) => console.log(err))
} else {
	app.listen(PORT, () => console.log(`server running on port ${PORT}`))
}