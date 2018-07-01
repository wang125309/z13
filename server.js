const express = require('express')

const server = express()

server.use('/static/', express.static(__dirname + '/dist/static'))
server.get('/', (req, res) => res.sendFile(__dirname + '/dist/index.html'))

const PORT = 8080
server.listen(PORT, () => {
    console.log('listening on port', PORT)
})

