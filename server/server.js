import express from "express";
import dotenv from "dotenv";
import userRoute from "./routes/userRoute.js";

import DBConnection from "./config/dbConfig.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use("/api/user", userRoute);

const PORT = process.env.PORT || 5000;

DBConnection();

app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));
