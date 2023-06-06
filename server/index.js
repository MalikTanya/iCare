import express from "express";
import dotenv from "dotenv";
import userRoute from "./routes/userRoute.js";
import adminRoute from "./routes/adminRoute.js";
import doctorRoute from "./routes/doctorRoute.js";
import DBConnection from "./config/dbConfig.js";
import morgan from "morgan";
import cors from "cors";

dotenv.config();
DBConnection();

const app = express();

app.use(express.json());
const options = {
  origin: ["http://localhost:3000", "https://i-care-client.vercel.app"],
  useSuccessStatus: true,
};

app.use(cors(options));

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
app.get("/", (req, res) => {
  res.send("API running...");
});
app.use("/api/user", userRoute);
app.use("/api/admin", adminRoute);
app.use("/api/doctor", doctorRoute);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));
