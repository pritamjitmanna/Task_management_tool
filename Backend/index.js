require('dotenv').config()
const express = require('express')
const app = express()
const mongoD=require('./Database/mongo')
const User=require('./Database/models/userData')
const cors=require('cors')

// Necessary constants

const PORT=5000
const HTTP="127.0.0.1";

// Starting mongo

mongoD();


// Requirements
app.use(cors())

app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use('/users',require('./Routes/authentication'))
app.use('/tasks',require('./Routes/apiTasks'))


app.listen(PORT,()=>console.log(`Listening at http://${HTTP}:${PORT}`))