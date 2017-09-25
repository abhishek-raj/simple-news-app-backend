var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/sources', function(req, res, next) {
  res.send('sources endpoint');
});

router.get('/news', function(req, res, next) {
	res.send('news endpoint');
});

module.exports = router;
