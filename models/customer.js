module.exports = function(sequelize, DataTypes){
    var customer = sequelize.define('customer', {
        name:{
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        }
    });

    customer.associate = function(models) {
        customer.hasMany(models.burger, { 
            onDelete: "cascade"
        });
    };

    return customer;
};