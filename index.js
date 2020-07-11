const express = require('express');

const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => res.send('Hey, this is still in progress!!'))

app.listen(port, () => console.log(`App listening at port: ${port}`))