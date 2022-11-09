var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET all customers. */
router.get('/customers', function (req, res, next) {
  var db = require('../db');
  var Customer = db.Mongoose.model('customers', db.CustomerSchema, 'customers');
  Customer.find({}).lean().exec(function(e,docs){
     res.json(docs);
     res.end();
  });
});



module.exports = router;
