var express = require('express');
var router = express.Router();
var _ = require('underscore');


var users = [
	{ name : 'rey@gmail.com', pass : 'OK' },
	{ name : 'saray', pass : '123' }
];
/* GET users listing. */
router.post('/login', function(req, res) {
   var user = _.findWhere(users,{ name : req.param('username'), pass : req.param('password') });
   res.send(user ? { success : true, user : user} : { success : false });
});

/* GET users listing. */
router.post('/recovery', function(req, res) {
   var user = _.findWhere(users,{ name : req.param('email') });
   res.send(user ? { success : true, messages : ['we sent an email to you'] } : { success : false, messages : ['dont user with this email. try again.'] });
});

module.exports = router;
