import { DataTypes } from "sequelize";
import db from "../utils/connection.js";
import Event from "./EventModels.js";

const Location = db.define(
  "Location",
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
    addres: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    capacity: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { tableName: "location" }
);

Location.hasMany(Event, {foreignKey: "location_id"})
Event.belongsTo(Location, {foreignKey: "location_id"})

export default Location