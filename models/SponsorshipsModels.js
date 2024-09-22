import { DataTypes } from "sequelize";
import db from "../utils/connection.js";
import Event from "./EventModels.js";

const Sponsorships = db.define(
  "Sponsorhsips",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    amount: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  { tableName: "sponsorhips" }
);

Sponsorships.hasMany(Event, {foreignKey: "sponsorships_id"})
Event.belongsTo(Sponsorships, {foreignKey: "sponsorships_id"})

export default Sponsorships;
