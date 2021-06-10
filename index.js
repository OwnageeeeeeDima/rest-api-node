const express = require('express')
const dotenv = require('dotenv').config()
const mongoose = require('mongoose')
const authorRoutes = require('./routes/author.routes')
const app = express()

app.use('/api', authorRoutes)


// connect to mongoDB
async function startServer() {
  try {
    const PORT = process.env.PORT
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true
    })
    console.log('mongoDB connected ....')
    app.listen(PORT, () => console.log(`Server started in ${PORT} PORT ....`))
  } catch (error) {
    console.error(error)
  }
}

startServer().then()



