import mongoose from 'mongoose'

mongoose.connect("mongodb+srv://admin:A1MdDG7XWh7eqSHmfYPX@aluralivros.n9p8blf.mongodb.net/AluraLivros");

let db = mongoose.connection;

export default db;