require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const foodItemsRouter = require('./routes/foodItems')

const app = express()
const PORT = 5000

mongoose
  .connect(process.env.DATABASE_URL)
  .then(() => {
    console.log('connected to database')
  })
  .catch((err) => {
    console.error('error connecting to database: ', err)
  })

app.use(express.json())
app.use('/foodItem', foodItemsRouter)

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`)
})
