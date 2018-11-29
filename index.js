var express = require('express');
var path = require('path');
var app = express();
var HomeRouter = require('./routes/home');
//模板引擎
app.set('view engine', 'ejs');
//
app.set('views', path.join(__dirname, 'views'));
//
app.use(express.static(__dirname + '/web'));

app.use('/', HomeRouter)
// app.get('/node', router.index);
// app.get('/node/data/:i', router.callData);
// app.get('/node/person', router.person)
// app.get('/node/array/:search', router.array)


app.listen(1307, function (err) {
    console.log("服务器已经启动，监听" + 1307 + "端口")
    if (err) console.log('1314端口被占用');
})