var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/', (req, res, next) => {
  res.render('home', {title: "Hello!"});
});
/* Get about page. */
router.get('/about', (req, res, next) => {
  res.render('about', {title: "About me"});
});
/* Get contact page. */
router.get('/contact', (req, res, next) => {
  res.render('contact', {title: "Contact-me"});
});
/* Get Project page. */
router.get('/Project/index', (req,res,next) => {
  res.render('Project/index',{title:'My Projects'});
});
/* here the router is directly sent has a module */
module.exports = router;
