var express = require('express');
var router = express.Router();
var perfService = require('../perf-service');

/* GET users listing. */
router.get('/', function(req, res, next) {
  perfService.callApiInterface(req,res);
});

module.exports = router;
