const express = require('express')
const https = require('https')
const http = require('http')
const path = require('path')
const fs = require('fs')

const httpPort = 3000
const httpsPort = 8443
const credentials = {
  key: fs.readFileSync(__dirname + '/private/key.pem'),
  cert: fs.readFileSync(__dirname + '/private/server.crt')
}

// App configuration
const app = express()

// Serve static files
app.use(express.static(path.join(__dirname, 'public')))

// Routing
app.get('/', (req, res) => {
  res.render('index')
})

// Error handling middleware
// Source: https://blog.risingstack.com/your-first-node-js-http-server/#errorhandling
app.use((err, request, response, next) => {  
  // log the error, for now just console.log
  console.log(err)
  response.status(500).send('Something broke!')
})

// Init server
const httpServer = http.createServer(app)
const httpsServer = https.createServer(credentials, app)

httpServer.listen(...imListening(httpPort))
httpsServer.listen(...imListening(httpsPort))

function imListening (port) {
  return [port, (err) => {
    if (err) console.log('Ruh roh:', err)

    console.log(`app listening on port ${port}`)
  }]
}