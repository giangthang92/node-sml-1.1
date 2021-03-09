const express = require('express') // lấy modul express
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Trang Chủ!')
})
app.get('/contact',(req, res) => {
    res.send('Contact!')
})
app.get('/chuyen-muc', (req, res) => {
    res.send('Chuyên mục!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

