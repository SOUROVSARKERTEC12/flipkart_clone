require('dotenv').config();
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const connectDB = require("./db/connect");


app.use(bodyParser())

app.get('/', (req, res) => {
    res.send('<h1>Flipkart Clone Test</h1>')
})

app.post('/data', (req, res) => {
    res.status(200).json({
        message: req.body
    })
})

const port = 3000 || process.env.PORT
const welcome = () => {
    console.log(`Server is listening on port ${port}...`)
}

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URL)
        app.listen(port, welcome)
    } catch (error) {
        console.log(error)
    }
};
start().then(() => console.log('Server started successfully....'))
