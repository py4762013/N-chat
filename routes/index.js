var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
    if(req.cookie.user == null){
        res.redirect('/signin');
    }else{
        res.sendfile('view/index');
    }
});

router.get('/signin', function(req, res){
    res.sendfile('views/signin.html');
});

router.post('/signin', function(req, res){
    if(users[req.body.name]){
        res.redirect('/signin');
    }else{
        res.cookie("user", req.body.name, {maxAge: 1000*60*60*24*30});
        res.redirect('/');
    }
});


module.exports = router;
