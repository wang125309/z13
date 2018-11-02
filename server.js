const express = require('express')

const server = express()

server.use('/static/', express.static(__dirname + '/dist/static'))
server.get('/', (req, res) => res.sendFile(__dirname + '/dist/index.html'))

server.get('/MP_verify_fHJhpA2HZCwUCCXa.txt', (req, res) => {
	res.sendFile(__dirname + '/MP_verify_fHJhpA2HZCwUCCXa.txt')
})

const PORT = 8080
server.listen(PORT, () => {
    console.log('listening on port', PORT)
})

