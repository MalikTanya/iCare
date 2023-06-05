import express from "express";
import dotenv from "dotenv";

import DBConnection from "./config/dbConfig.js";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;

DBConnection();

app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));
