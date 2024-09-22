import { DataTypes } from "sequelize";
import db from "../utils/connection.js";
import Event from "./EventModels.js";

const Rundown = db.define("Rundown", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    start_time: {
        type: DataTypes.TIME,
        allowNull: false
    },
    end_time: {
        type: DataTypes.TIME,
        allowNull: false
    }
},{tableName: "rundown"})

Rundown.hasMany(Event, {foreignKey: "rundown_id"})
Event.belongsTo(Rundown, {foreignKey: "rundown_id"})

export default Rundown