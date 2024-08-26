import mongoose, { mongo } from "mongoose";

let isConnected = false;

export const connectToDB = async () => {
  mongoose.set("strictQuery", true);

  if (!process.env.MONGO_URI) return console.log("MONGO_DB is not define");

  if (isConnected) return console.log(` > using existing database connection `);

  try {
    await mongoose.connect(process.env.MONGO_URI);

    isConnected = true;

    console.log("MongoDB Connected");
  } catch (error) {
    console.log(error);
  }
};
