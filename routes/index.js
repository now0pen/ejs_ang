var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/pluralsight', function(req, res, next) {
  res.render('pluralsight', { 
      title: 'pluralsight angularjs tutorials' 
  });
});

router.get('/test', function(req, res, next) {
  res.render('test', { 
      title: 'test ng-controller' 
  });
});

router.get('/', function(req, res, next) {
  res.render('index', { 
      title: 'Jim Syyap & Co.' 
  });
});

module.exports = router;
