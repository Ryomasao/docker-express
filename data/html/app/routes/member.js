var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');

const Member = require('../models/member');

/* GET users listing. */
router.get('/', function(req, res, next) {
  const ayane = new Member();
  ayane.name = 'ayane';
  ayane.color = 'blue';

  ayane.save((err)=>console.error(err));
  
  res.send('yes');
});

module.exports = router;
