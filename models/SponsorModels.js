import { DataTypes } from "sequelize";
import db from "../utils/connection.js";
import Sponsorships from "./SponsorshipsModels.js";

const Sponsor = db.define(
  "Sponsor",
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
    contact_person: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "sponsor",
  }
);

Sponsor.hasMany(Sponsorships, {foreignKey: "sponsor_id"})
Sponsorships.belongsTo(Sponsor, {foreignKey: "sponsor_id"})

export default Sponsor
