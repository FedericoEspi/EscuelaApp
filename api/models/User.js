import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";
import bcrypt from "bcrypt"

export const User = sequelize.define("users", {
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
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isEmail: true,
    },
  },
  psw: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

// Password hashing
User.beforeCreate((user) => {
  return bcrypt.hash(user.psw, 10).then((hash) => {
    user.psw = hash;
  });
});

// Sets the email to lowercase
User.beforeCreate((user) => {
  user.email = user.email.toLowerCase();
});
