var burger = require('../models/burger.js');

module.exports = function(app){
    app.get('/', function(req,res){
        burger.all(function(data){
            res.render('index', {burgers:data});
        })
        
    });

    app.put('/api/burger/eat/:id', function(req,res){
        var id = req.params.id
        console.log(id);
        burger.eat(id, function(data){
            console.log(data);
            res.status(200).end();
        })
    })

    app.put('/api/burger/make/:id', function(req,res){
        var id = req.params.id
        console.log(id);
        burger.make(id, function(data){
            console.log(data);
            res.status(200).end();
        })
    })

    app.post('/api/burger', function(req,res){
        var newBurger = req.body.burger
        console.log(newBurger);
        burger.add({burger:newBurger}, function(data){
            console.log(data);
            res.status(200).end();
        })
    })
};

