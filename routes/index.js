var express = require('express');
var router = express.Router();
const app = express();
app.use(express.static('public'));

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
