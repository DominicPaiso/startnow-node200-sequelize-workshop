'use strict';
module.exports = (sequelize, DataTypes) => {
  var Author = sequelize.define('Author', {
    firstName: { type: DataTypes.STRING, required: true},
    lastName: { type: DataTypes.STRING, required: true},
    email: { type: DataTypes.STRING, required: true}
  }, {});
  Author.associate = function(models) {
    Author.hasMany(models.Blog, {
      as: 'blogs',
      foreignKey: 'authorId',
      targetKey: 'id'
    });
    // associations can be defined here
  };
  return Author;
};