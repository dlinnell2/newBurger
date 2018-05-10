var db = require("../models");

module.exports = function (app) {
    app.get('/', function (req, res) {
        db.burger.findAll({
            include: [db.customer]
        }).then(function (data) {

            var pageData = [];
            data.forEach(function (item) {

                if (item.dataValues.customer) {

                    var newBurger = {
                        id: item.dataValues.id,
                        burger: item.dataValues.burger,
                        devoured: item.dataValues.devoured,
                        customer: item.dataValues.customer.name
                    }

                } else {
                    var newBurger = {
                        id: item.dataValues.id,
                        burger: item.dataValues.burger,
                        devoured: item.dataValues.devoured
                    }
                }

                pageData.push(newBurger);
            });

            res.render('index', { burgers: pageData });
        })

    });

    app.put('/api/burger/eat/:id', function (req, res) {
        db.customer.create({
            name: req.body.customer
        }).then(function (data) {
            console.log('response')
            db.burger.update({
                devoured: true,
                customerId: data.dataValues.id
            },
                {
                    where: {
                        id: req.params.id
                    }
                }).then(function (data) {

                    res.status(200).end();
                });
        });

    })

    app.post('/api/burger', function (req, res) {
        db.burger.create({
            burger: req.body.burger
        }).then(function (data) {
            res.status(200).end();
        });
    });

};