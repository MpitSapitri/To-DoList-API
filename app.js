const userRouter = require('./routes/user-routes')
require('dotenv').config()
const bodyParser = require('body-parser')
const user = require('cors')
const express = require('express')

const userLogger = require('./middleware/logger')

const app = express()
//app.use(cors)
app.use(bodyParser.json())
app.use(userLogger)
//app.use(bodyParser.urlencoded)()
app.use('/api/student',userRouter)

const port = process.env.PORT
app.listen(port,()=>{
    console.log(`Server run at http://localhost:${port}/api/student`);
})