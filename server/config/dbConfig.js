import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const DBConnection = async () => {
  console.log("Database connected successfully");
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error("Error while connecting with the database", error.message);
  }
};

export default DBConnection;
