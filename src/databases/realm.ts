import Realm from "realm";
import { AgendSchema } from "./schemas/AgendSchema";

export const get_realm = async () => await Realm.open({
  path: "db_barber_app",
  schema: [AgendSchema]
})
