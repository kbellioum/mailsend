const express = require('express');
const router = express.Router();

var mailgun = require("mailgun-js");
var api_key = 'key-0720e90820d91b543d01e5c84989d583';
var DOMAIN = 'sandbox7fe163bd9a5b494c93fc6bdef403637f.mailgun.org';
var mailgun = require('mailgun-js')({apiKey: api_key, domain: DOMAIN});

var data = {
  from: 'Excited User <me@sandbox7fe163bd9a5b494c93fc6bdef403637f.mailgun.org>',
  to: 'kbellioum@gmail.com',
  subject: 'Hello',
  text: 'Testing some Mailgun awesomness!'
};




/* GET home page. */
router.get('/', (req, res) => {
  res.render('index', { title: 'Express' });
});


router.post('/send', (req, res) => {
  let a = {};
  a.title = 'Title';
  a.message = 'Message';

  mailgun.messages().send(req.body, function (error, body) {
    console.log(body);
  });

  res.json(req.body);
});

module.exports = router;
