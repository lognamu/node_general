const app = require('express')();
app.listen(3000, function(){console.log('Server Start');});
app.set('views','./views');
//app.set('view engine', 'ejs');
//app.set('view engine', 'pug');
app.get('/login_ejs', function(request, response){
  response.render('login.ejs', {title:"myPage"});
});

app.get('/login_pug', function(request, response){
  response.render('login.pug', {title:"myPage"});
});

app.get('/bbs/list', function(request, response){
  response.render('bbs/list.pug', {title:"myPage"});
});
