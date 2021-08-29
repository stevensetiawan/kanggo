require('dotenv').config()
const express = require('express')
const morgan = require('morgan');
const app = express()
const cors = require('cors')
const router = require('./routes');

app.get('/', (req, res) => {
  res.status(200).json({
    status: 'success',
    message: "Testing"
  })
})

app.use(cors())

app.use(express.json());
if (process.env.NODE_ENV !== 'test')
  app.use(morgan('dev'));

app.use(express.urlencoded({ extended: true }))

app.use('/api/v1', router);

// app.listen(port, () =>
//     console.log(`Example app listening at http://localhost:${port}`)
// )
module.exports = app;