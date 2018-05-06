var connection = require('./connection.js');

var orm = {
    selectAll: function(table, callback){
        connection.query('SELECT * FROM ??', [table], function (err, sqlData){
            if(err) throw(err);
            callback(sqlData);
        });
    },
    insertOne: function(table, colVal, callback){
        connection.query('INSERT INTO ?? SET ?', [table, colVal], function (err, sqlData){
            if(err) throw(err);
            callback(sqlData);
        })
    },
    updateOne: function(table, colVal, id, callback){
        connection.query('UPDATE ?? SET ? WHERE id = ?', [table, colVal, id], function (err, sqlData){
            if(err) throw(err);
            callback(sqlData);
        })
    }
};

module.exports = orm;