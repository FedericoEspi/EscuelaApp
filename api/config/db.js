import { Sequelize } from "sequelize";

const sequelize = new Sequelize("escuelaapp", "postgres", "federico94", {
  host: "localhost",
  dialect: "postgres",
});

export default sequelize;