import { DataTypes } from "sequelize";
import db from "../utils/connection.js";
import Event from "./EventModels.js";

const Promotions = db.define(
  "Promotion",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    instagram: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { tableName: "promotion" }
);

Event.hasMany(Promotions, {foreignKey: "event_id"})
Promotions.belongsTo(Event, {foreignKey: "event_id"})

export default Promotions