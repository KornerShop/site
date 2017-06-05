const path = require('path')
const express = require("express")
const app = express()
const helmet = require('helmet')
const compression = require('compression')
const port = 3001

app.use(helmet())
app.use(compression())

app.use('/static', express.static(path.join(__dirname, 'assets')))

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'))
})

app.listen(port, () => {
  console.log(`>>> listening on port ${port} `)
})
