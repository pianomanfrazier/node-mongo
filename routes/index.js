var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/newuser', (req,res) => {
	res.render('newuser', {title: 'Add new user'});	
});

router.post('/adduser', (req,res) => {
	var db = req.db;	
	var userName = req.body.username;
	var userEmail = req.body.useremail;

	var collection = db.get('userlist');
	collection.insert({
		"username" : userName,
		"email" : userEmail
	}, (err, doc) => {
		if (err) {
			res.send("Problem adding to database");
		} else {
			res.redirect("/");
		}
	});
});

router.get('/deluser', (req,res) => {
	res.render('deluser', {title: 'Delete a user'});	
});

router.post('/deluser', (req,res) => {
	var db = req.db;	
	var userName = req.body.username;
	var userEmail = req.body.useremail;

	var collection = db.get('userlist');
	collection.remove({
	"username" : userName
	}, (err, doc) => {
		if (err) {
			res.send("Problem deleting from database");
		} else {
			res.redirect("/");
		}
	});
});

module.exports = router;
