var orm = require('../config/orm.js');

var burger = {
    all: function(cb){
        orm.selectAll('burgers', function(data){
            cb(data);
        });
    },
    eat: function(id, cb){
        orm.updateOne('burgers', {devoured:1}, id, function(data){
            cb(data);
        });
    },
    make: function(id, cb){
        orm.updateOne('burgers', {devoured:0}, id, function(data){
            cb(data);
        });
    },
    add: function(name, cb){
        orm.insertOne('burgers', name, function(data){
            cb(data);
        })
    }
}

module.exports = burger;