var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login', { title: 'login' });
});
router.post('/', function (req, res) {
   /* console.log(req.body.username);
    console.log(req.body.password);*/
    var Data = {
        username: req.body.username,
        password: req.body.password 
    };
    User.findOne({
        name: Data.username,
        //pass:Data.password
    }, function (err, data) {
        if(err){
            console.log(err);
        }else {
            console.log("ok");
        }
         /*if(err) throw err;
        if(data){
            res.send('登录成功');
        }else{
            res.send('账号或密码错误')
        }*/
    } )
});
router.get('/index', function(req, res, next) {
  res.render('index');
});
router.get('/index2', function(req, res, next) {
  res.render('index2');
});
router.get('/index3', function(req, res, next) {
  res.render('index3');
});
router.get('/register', function(req, res, next) {
  res.render('register', { title: 'register' });
});
module.exports = router;
