var express = require('express');
var router = express.Router();
var axios = require('axios');
var apiKey = ""

axios.post('http://clav-api.di.uminho.pt/v2//users/login',{username: "daw2020@teste.uminho.pt", password: "232"})
    .then((res) => {
        apiKey = res.data.token;
    })
    .catch((err) => {
        console.log(err);
    });
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/classes', function(req, res, next) {
  axios.get('http://clav-api.di.uminho.pt/v2/classes?nivel=1&token=' + apiKey)
      .then(result => {
          res.render('pagClasses', { pagClasses: result.data })
      })
      .catch(error => {
          res.render('error', { error: error })
      });
});

router.get('/classes/id/:id', function(req, res, next) {
  axios.get('http://clav-api.di.uminho.pt/v2/classes?nivel=1&token=' + apiKey)
      .then(result => {
          res.render('pagClasses', { pagClasses: result.data })
      })
      .catch(error => {
          res.render('error', { error: error })
      });
});

module.exports = router;
