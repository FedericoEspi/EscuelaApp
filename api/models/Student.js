import  {DataTypes}  from "sequelize";
import  sequelize  from "../config/db.js";

export const Student = sequelize.define("students", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  dniStudent: {
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: true,
  },
  adress: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  fatherName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  fatherLastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  fatherDni: {
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: true,
  },
  fatherProfession: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  fatherTelephone: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  fatherEmail: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isEmail: true,
    },
  },
  motherName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  motherLastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  motherDni: {
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: true,
  },
  motherProfession: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  motherTelephone: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  motherEmail: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isEmail: true,
    },
  },
  observation: {
    type: DataTypes.TEXT,
  },
  oneOtherPersonName: {
    type: DataTypes.STRING,
  },
  oneOtherPersonLastName: {
    type: DataTypes.STRING,
  },
  oneOtherPersonDni: {
    type: DataTypes.INTEGER,
    unique: true,
  },
  oneOtherPersonTelephone: {
    type: DataTypes.INTEGER,
  },
  twoOtherPersonName: {
    type: DataTypes.STRING,
  },
  twoOtherPersonLastName: {
    type: DataTypes.STRING,
  },
  twoOtherPersonDni: {
    type: DataTypes.INTEGER,
    unique: true,
  },
  twoOtherPersonTelephone: {
    type: DataTypes.INTEGER,
  },
});

