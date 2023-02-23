export const AgendSchema = {
  name: "Agend",
  properties: {
    _id: "string",
    client: "string",
    corte: "bool",
    barba: "bool",
    sombrancelha: "bool",
    status: "string",
    created_at: "date",
    end_time: "date",
    end_date: "date",
  },
  primaryKey: "_id",
}