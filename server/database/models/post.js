const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    static associate(models) {

      Post.belongsToMany(models.User, {
        through: 'UserPosts', // Asegúrate de usar el nombre correcto de la tabla intermedia
        foreignKey: 'postId',
      });
    }
  }

  Post.init(
    {
      // Atributos del modelo 'Post'
      title: DataTypes.STRING,
      price: DataTypes.FLOAT,
      people: DataTypes.STRING,
      summary: DataTypes.STRING,
      description: DataTypes.STRING,
      imageFile: DataTypes.ARRAY(DataTypes.STRING),
      status: DataTypes.STRING,
      infoImportant: DataTypes.ARRAY(DataTypes.STRING),
      continent: DataTypes.STRING,
      country: DataTypes.STRING,
      daysAtentions: DataTypes.STRING,
      hoursAtentionsFinally: DataTypes.STRING,
      hoursAtetionsInitial: DataTypes.STRING,
      reservedDates: DataTypes.ARRAY(DataTypes.STRING),
      listDetails: DataTypes.ARRAY(DataTypes.STRING)


    },
    {
      sequelize,
      modelName: 'Post',
    }
  );
  return Post;
};
