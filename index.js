const express = require('express');
const app = express();
const ejs = require('ejs');
const ejsEngine = require('ejs-mate');

app.set('view engine', 'ejs');
app.set('views', './views');

app.use('/public',express.static('./public'));
app.engine('ejs',ejsEngine);

const port = 3000

// app.get('/home', (req , res ) => {
//     res.redirect("http://example.com");
// });
app.get('/', (req, res) => {
res.render('client/page/homepage');
});
app.get('/post',(req, res) => {
    res.render('client/page/post');
});

// app.get('/chuyen-muc/:name',(req, res) => {
//     const postid = req.params.name;
//     res.send('Trang ' + postid);
// })

app.listen(port,() => {
    console.log('Xử Lý');
});