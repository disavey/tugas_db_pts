import { DataTypes } from "sequelize";
import db from "../utils/connection.js";
import Registration from "./RegistrationModels.js";
import Ticket from "./TicketModels.js";

const Participant = db.define(
  "Participant",
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
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { tableName: "participant" }
);

Participant.hasMany(Registration, {foreignKey : "participant_id"})
Registration.belongsTo(Participant, {foreignKey: "participant_id"})

Participant.hasMany(Ticket, {foreignKey: "participant_id"})
Ticket.belongsTo(Participant, {foreignKey: "participant_id"})

export default Participant