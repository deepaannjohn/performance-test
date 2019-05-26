var express = require('express');
var router = express.Router();
var perfAsyncService = require('../perfAsync-service');

/* GET users listing. */
router.get('/', function(req, res, next) {
  perfAsyncService.ParallelFlow((result) => {
    res.status(200).json(result);
  });
});

module.exports = router;
