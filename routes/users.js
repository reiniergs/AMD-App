var express = require('express');
var router = express.Router();
var _ = require('underscore');


var users = [
	{ name : 'rey', pass : 'OK' },
	{ name : 'saray', pass : '123' }
];
/* GET users listing. */
router.get('/login/:name/:pass', function(req, res) {
   var user = _.findWhere(users,{ name : req.params.name, pass : req.params.pass });
   res.send(user ? { success : true, user : user} : { success : false });
});

/* GET users listing. */
router.get('/recovery/:email', function(req, res) {
   var user = _.findWhere(users,{ name : req.params.name });
   res.send(user ? { success : true, messages : ['we sent an email to you'] } : { success : false, messages : ['dont user with this email. try again.'] });
});

module.exports = router;
