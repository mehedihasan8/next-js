import mongoose from "mongoose";

type ConnectionObject = {
  isConnected?: number;
};

const connecton: ConnectionObject = {};

async function dbConnect(): Promise<void> {
  if (connecton.isConnected) {
    console.log("Alread connect to database");
    return;
  }

  try {
    const db = await mongoose.connect("mongodb://localhost:27017" || "");
    connecton.isConnected = db.connections[0].readyState;
    console.log("DB Connect Successfully!");
  } catch (error) {
    console.log("Database connection failed", error);
    process.exit(1);
  }
}

export default dbConnect;
