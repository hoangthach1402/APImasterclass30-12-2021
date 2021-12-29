const express = require('express')
const dotenv = require('dotenv')

// Load env
dotenv.config({ path: './config/config.env' })

const app = express()
const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`server is running in ${process.env.NODE_ENV} on  PORT ${PORT}`)
})
