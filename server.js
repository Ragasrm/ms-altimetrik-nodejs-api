const express = require('express')
const app = express()
const PORT = process.env.PORT || 5000
const cors = require('cors')
// database
const db = require('./app/dbConnection/Connection')
// Middlewares
app.use(cors())
app.use(express.json())

// Main Route for centre


const user = require('./app/router/user')
app.use('/api/v1/user', user)

db.initConnection()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`the server is running in ${PORT}`)
    })
  })
  .catch((err) => {
    console.log('could not connect to DB..!' + err.message)
  })