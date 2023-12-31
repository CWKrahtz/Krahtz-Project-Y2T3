require('dotenv/config')
const express = require('express')
const app = express();
const cors = require('cors')
const mongoose = require('mongoose')
const ProductRoute = require('./routes/products')
const userRoutes = require('./routes/users')
const authRoutes = require('./routes/auth')
const orderRoutes = require('./routes/orders');

//Used with React()
app.use(cors({
    origin: 'http://localhost:3000'
}))

// app.use(express.static('productImages'));
app.use('/productImages', express.static('productImages'))

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(ProductRoute)
app.use(orderRoutes)
app.use("/api/users", userRoutes)
app.use("/api/auth", authRoutes)

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