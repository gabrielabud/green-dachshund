const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello Green Dachshund'))

app.listen(port, () => console.log(`Verde Dachshund listening on port ${port}!`))