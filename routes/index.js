var express = require('express');
const gTTS = require('gtts');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/speak', (req, res) => {
  if (!req.query.text) return res.send('no');
  const gtts = new gTTS(req.query.text, "en");
  gtts.stream().pipe(res);
});

module.exports = router;
