process.env.NODE_ENV !== 'production' ? require('dotenv').config() : null

const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const authRouter = require('./routes/auth.route')
const userRouter = require('./routes/userRouter')
const validateRouter = require('./routes/validate.route')
const app = express()
const db = require('./database/database')

app.use(express.json())
app.use(morgan('dev'))
app.use(cors())

// db.connect((err) => {
//     if (err) {
//         console.log(err);
//         throw err;
//     }
//     console.log('MySql Connected...');
// })


app.use('/api', authRouter)
app.use('/api/user', userRouter)
app.use('/api', validateRouter)


app.listen(process.env.PORT, console.log(`SERVER IS RUNNING ON PORT ${process.env.PORT}`))

