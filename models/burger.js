module.exports = function(sequelize, DataTypes) {
    var burger = sequelize.define("burger", {
      burger:{
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len:[1,140]
        }
      },
      devoured: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
      }
    });

    burger.associate = function(models){
        burger.belongsTo(models.customer, {
            foreignKey:{
                allowNull: true
            }
        });
    };
    return burger;
  };