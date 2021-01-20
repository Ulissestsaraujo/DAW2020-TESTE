var express = require('express');
var router = express.Router();

var batismosController = require('../controllers/batismo')


// GET /api/batismos/batisado - Devolve apenas uma lista com os nomes dos indivíduos batizados ordenada alfabeticamente;
router.get('/batismos/batisado', (req,res) => {
    batismosController.batisados()
        .then(data => { var result = []
            data.forEach(i =>{
                txt = i.title.split(':')
                nome = txt[1].split('.')
                result.push(nome[0])
            });
            console.log(result)
            res.json(result.sort())
        })
        .catch(err => res.status(500).jsonp(err))
})

//GET /api/batismos/progenitores - Devolve uma lista de triplos em que cada triplo tem a seguinte estrutura: {_id: "identificador do registo original", pai: "nome do pai do indivíduo que foi batizado", mae: "nome da mae do indivíduo que foi batizado"}; Esta alínea poderá ser resolvida de várias maneira e irá depender da forma como resolveste as primeiras.
router.get('/batismos/progenitores', (req,res) => {
    batismosController.progenitores()
            .then(data => res.json(data))
            .catch(err => res.status(500).jsonp(err))
})
// GET /api/batismos/stats - Devolve uma lista de pares, ano e número de batismos nesse ano
router.get('/batismos/stats', (req,res) => {
    batismosController.stats()
            .then(data => res.json(data))
            .catch(err => res.status(500).jsonp(err))
})


// GET /api/batismos - Devolve a lista dos batismos, com os campos: _id, date, title e ref;
router.get('/batismos', (req,res) => {
    batismosController.list()
        .then(data => res.json(data))
        .catch(err => res.status(500).jsonp(err))
})



// GET /api/batismos/:id - Devolve a informação completa de um batismo;
router.get('/batismos/:id', (req,res) => {
    const id = req.params.id
    batismosController.findById(id)
        .then(data => res.json(data))
        .catch(err => res.status(500).jsonp(err))
})



module.exports = router;