import { DataTypes, ForeignKeyConstraintError } from "sequelize";
import db from "../utils/connection.js";
import Registration from "./RegistrationModels.js";

const Ticket = db.define(
  "Ticket",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    ticket_type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "ticket",
  }
);

Ticket.hasOne(Registration, {foreignKey: "ticket_id"})
Registration.belongsTo(Ticket, {foreignKey: "ticket_id"})

export default Ticket;
