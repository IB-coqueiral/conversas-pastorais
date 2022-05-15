var express = require('express');
var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('em_breve', { 
//     title: 'III Congresso Miqueias Brasil 2022',
//     layout: 'layout/em_breve' 
//   });
// });

router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'III Congresso Miqueias Brasil 2022',
    layout: "layout/principal" 
  });
});

module.exports = router;
