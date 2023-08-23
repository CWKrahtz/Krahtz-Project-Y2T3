const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const { log } = require('console')
const ProductRoute = require('./routes/products')
require('dotenv/config')

const app = express();

//Used with React()
app.use(cors({
    origin: 'http://localhost:3000'
}))

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(ProductRoute)

//Connect to DB
mongoose.connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'KrahtzFitness' //Collection Name
}).then(() => {
    console.log("Connected to DB")
}).catch((err) => {
    console.log("No connection. Error: " + err)
})

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log("Server Started On Port: ", PORT)
})