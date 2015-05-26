var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/hello', function (req, res, next) {
  var data = {
    message: "Hello World!",
    innerMsg: {
      innerMessage: "Hola gente!",
      evenDeeper: {
        evenDeeper: "Hola europeanos!"
      }
    }
  };
  res.send(data);
});

router.get('/global', function(req, res, next) {
  var data = {
    process.env.forKey
  };
  res.send(data);
});

module.exports = router;
