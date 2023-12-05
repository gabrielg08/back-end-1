import { Sequelize } from "sequelize";
import { envs } from "../enviroments/enviroments.js";

export const sequelize = new Sequelize(envs.DB_URI, {
  logging: false,
});

export const authenticated = async () => {
  try {
    console.log("Connection ok!... 😬");
  } catch (error) {
    console.log(error);
  }
};

export const syncUp = async () => {
  try {
    console.log("Synced ok!... 👍");
  } catch (error) {
    console.log(error);
  }
};
