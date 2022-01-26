const { DataTypes, UUIDV4 } = require("sequelize");

module.exports = (sequelize) => {
  // Defino el modelo:
  sequelize.define("product", {
    
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false,
      defaultValue:DataTypes.UUIDV4
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  
    soldQty:{
      type:DataTypes.INTEGER,
      defaultValue:0
    },
    img: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false,
    },
    info: {
      type: DataTypes.JSON({
        color:DataTypes.STRING,
        manufacturer:DataTypes.STRING,
        cloth: DataTypes.STRING,
      })
    },
    description: {
      type: DataTypes.STRING,
    },
    aditionalInformation: {
      type: DataTypes.STRING,
    },
    stock: {
      type: DataTypes.JSON({
        xs: DataTypes.INTEGER,
        s: DataTypes.INTEGER,
        m: DataTypes.INTEGER,
        l: DataTypes.INTEGER,
        xl: DataTypes.INTEGER,
        xxl: DataTypes.INTEGER,
      }),
    },
  });
};
