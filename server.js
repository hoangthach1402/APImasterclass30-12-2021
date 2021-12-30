const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')
const connectDB = require('./config/db')

// ConectDB

// Route file

// Load env
dotenv.config({ path: './config/config.env' })
const bootcamps = require('./routes/bootcamps')

connectDB()

const app = express()

// Dev logging middleware
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}

// app.use(logger)
app.use(express.json())
// Moun router
app.use('/api/v1/bootcamps', bootcamps)

const PORT = process.env.PORT
const server = app.listen(PORT, () => {
  console.log(`server is running in ${process.env.NODE_ENV} on  PORT ${PORT}`)
})

// Handle unhandle promise rejections
process.on('unhandledRejection', (err, promise) => {
  console.log(`Error: ${err.message} `)
  //   Close server &
  server.close(() => {
    process.exit(1)
  })
})
