var express = require('express');
var router = express.Router();
var fs = require('fs');
var multer  = require('multer');
var upload = multer({ 
	dest: 'uploads/',
	limits: {
		fileSize: 3 * 1024 * 2014
	}
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.post('/api/filemetadata', upload.single('document'), function(req, res, next){
	var fileSize = req.file.size;
	fs.unlink(req.file.path);
	res.json({
		fileSize: fileSize
	});
});

module.exports = router;
