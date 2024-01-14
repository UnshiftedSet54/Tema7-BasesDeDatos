const express = require('express')
const app = express()
const port = 3001
const MovilesRoute = require('./routes/moviles')

app.use(express.json())

app.use('/moviles', MovilesRoute)

app.listen(port, () => console.log(`Server running at http://localhost:${port}/`))