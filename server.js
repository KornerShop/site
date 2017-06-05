const express = require("express")
const app = express()
const helmet = require('helmet')
const compression = require('compression')
const port = 3001

app.use(helmet())
app.use(compression())

app.use('/static', express.static(__dirname + '/assets'))

app.get("/", (req, res) => {
  res.sendFile(__dirname + '/index.html')
})

app.listen(port, () => {
  console.log(`>>> listening on port ${port} `)
})
