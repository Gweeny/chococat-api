import express, { json } from "express";
import ChocolateRoutes from "../routes/chocolate.route.js";
import dotenv from "dotenv";
import connectDB from "../models/databaseConnect.js";
import cors from "cors";
dotenv.config();
connectDB();

const PORT = process.env.PORT || 3001;

const app = express();
app.use(cors());
app.use(json());

app.use("/api/chocolate", ChocolateRoutes);

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
