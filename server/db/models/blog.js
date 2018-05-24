'use strict';
module.exports = (sequelize, DataTypes) => {
  var Blog = sequelize.define('Blog', {
    // authorId: {type: DataTypes.INTEGER, required: false},
    title: {type: DataTypes.STRING, required: true},
    article: {type: DataTypes.TEXT, required: true},
    featured: {type: DataTypes.BOOLEAN, required: true},
    published: {type: DataTypes.DATE, required: true}

  }, {});
  Blog.associate = function(models) {
    models.Blog.belongsTo(models.Author, {
      as: 'author',
      foreignKey: 'authorId',
      targetKey: 'id'
    });
    // associations can be defined here
  };
  return Blog;
};