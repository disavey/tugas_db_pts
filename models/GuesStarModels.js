import { DataTypes } from "sequelize";
import db from "../utils/connection.js";
import Rundown from "./RundownModels.js";

const GuestStar = db.define("GuestStar", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
},{
    tableName: "guest_star"
})

GuestStar.hasMany(Rundown, {foreignKey: "guestStar_id"})
Rundown.belongsTo(GuestStar, {foreignKey: "guestStar_id"})

export default GuestStar