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

router.post('/', function(req, res, next) {

  const member = new Member();
  member.name = req.body.name;
  member.color = req.body.color;

  member.save( err =>{
    if(err){
      console.log(err);
      res.status(500).send(err);
    } else {
      // モデルのstaticメソッド的なものなんだろうか。
      Member.find({}, (findErr, memberArray)=> {
        if(findErr)   
          res.status(500).send(findErr);
        else {
          res.status(200).send(memberArray);
        }
      })
    }
  }
  );

});

module.exports = router;
