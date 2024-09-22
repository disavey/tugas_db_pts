import db from "../utils/connection.js";
import Event from "./EventModels.js";
import Participant from "./ParticipantModels.js";
import Registration from "./RegistrationModels.js";
import Ticket from "./TicketModels.js";
import Location from "./LocationModels.js";
import Sponsor from "./SponsorModels.js";
import Sponsorships from "./SponsorshipsModels.js";
import GuestStar from "./GuesStarModels.js";
import Promotion from "./PromotionsModels.js";

await db.sync({ alter: true });

await Event.sync()
await Participant.sync()
await Registration.sync()
await Ticket.sync()
await Location.sync()
await Sponsor.sync()
await Sponsorships.sync()
await GuestStar.sync()
await Promotion.sync()