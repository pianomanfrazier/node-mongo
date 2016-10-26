var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/userlist', function(req, res) {
	var db = req.db;
	var collection = db.get('userlist');
	collection.find({},{},function(e,docs){
		res.json(docs);
	});
	//this works now
	//res.json([{"username": "bob", "email": "bob@bob.com"}, {"username": "jim", "email":"jim@jim.com"}]);
});

module.exports = router;
