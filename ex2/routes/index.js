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


router.get('/classes', function(req, res, next) {
  axios.get('http://clav-api.di.uminho.pt/v2/classes?nivel=1&token=' + apiKey)
      .then(resultado => {
          res.render('pagClasses', { pagClasses: resultado.data })
      })
      .catch(error => {
          res.render('error', { error: error })
      });
});

router.get('/classes/id/:id', function(req, res, next) {
  axios.get('http://clav-api.di.uminho.pt/v2/classes/'+ req.params.id + '?token=' + apiKey)
      .then(resultado => {
          var nivelClasse = resultado.data.nivel
          if(nivelClasse==3){
            res.render('classeNivel3',{
              classe: resultado.data
            })
          }else{
            res.render('classe',{
              classe:resultado.data
            })
          }
      })
      .catch(error => {
          res.render('error', { error: error })
      });
});
/* GET termos de Inds. */
router.get('/termosInd', function(req, res, next) {
  axios.get('http://clav-api.di.uminho.pt/v2/termosIndice?token=' + apiKey)
      .then(resultado => {
          res.render('termosInd', { termosInd: resultado.data })
      })
      .catch(error => {
          res.render('error', { error: error })
      });
});
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});
module.exports = router;
