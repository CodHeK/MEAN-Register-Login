var express = require('express');
var router = express.Router();

//Get HomePage index.hbs
router.get('/', ensureLoggedIn, function(req, res) {
	res.render('index');
});


function ensureLoggedIn(req, res, next) {
	if(req.isAuthenticated()) {
		return next();
	}
	else {
		//req.flash('error_msg', 'You are not Logged in !');
		res.redirect('/users/login');
	}
} 
module.exports = router;