const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')



const app = express()
const port = process.env.PORT || 3000

app.use(express.json())// TO HANDLE THE JSON DATA IN THE POSTMAND
app.use(userRouter)// to export the content on web from user.js
app.use(taskRouter)



app.listen(port, () => {
    console.log('Server is up on port ' + port)
})