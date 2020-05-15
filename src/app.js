const path = require('path')
const express = require('express')

const app = express()

console.log(path.join(__dirname, '../public'))
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, '../templates/views'))
app.use(express.static(path.join(__dirname, '../public')))

app.get('/warp_gen', (req, res) => {
    res.render('warp_gen')
})

app.listen(3000, () => {
    console.log('server up on port 3000')
})