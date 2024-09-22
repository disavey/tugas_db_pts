import { DataTypes } from "sequelize";
import db from "../utils/connection.js";
import Registration from "./RegistrationModels.js";
import Ticket from "./TicketModels.js";

const Event = db.define(
  "Event",
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
    event_date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
  },
  { tableName: "event" }
);

Event.hasMany(Registration, {foreignKey: "event_id"})
Registration.belongsTo(Event, {foreignKey: "event_id"})

Event.hasMany(Ticket,{ foreignKey: "event_id" })
Ticket.belongsTo(Event, { foreignKey: "event_id" });



export default Event
