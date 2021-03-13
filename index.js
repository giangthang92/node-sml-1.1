const express = require('express');
const app = express();
const ejs = require('ejs');

app.set('view engine', 'ejs');
app.set('view', './views');

app.use('/public',express.static('./public'));

const port = 3002

app.get('/home', (req , res ) => {
    res.redirect("http://example.com");
});
app.get('/chuyen-muc', (req, res) => {
res.send('<a href="/home">Back home</a> <br> <a href="/chuyen-muc">chuyen fgfg</a>');
});

app.get('/chuyen-muc/:name',(req, res) => {
    const postid = req.params.name;
    res.send('Trang ' + postid);
})

app.listen(port,() => {
    console.log('Xử Lý');
})