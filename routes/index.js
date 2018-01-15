const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  res.render('index', { title: 'Express' });
});


router.get('/test', (req, res) => {
  res.json({toto: 'Alo', titi: 'yes'});
})

module.exports = router;
