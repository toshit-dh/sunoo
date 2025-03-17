import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { EventEmitter } from "events";
import morgan from "morgan";
import mongoose from "mongoose";
import { songsRouter } from "./routes/songRoutes.js";
import { userRouter } from "./routes/userRoutes.js";
import { artisteRouter } from "./routes/artisteRoutes.js";
import { playlistRouter } from "./routes/playlistRoutes.js";

dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://techtoshitworks:UADKIkPjyOj9r5Nx@cluster0.lfrqr.mongodb.net/",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("MongoDB Connected Successfully 🚀");
  } catch (error) {
    console.error("MongoDB Connection Failed ❌", error.message);
    process.exit(1);
  }
};

connectDB();

const app = express();

EventEmitter.setMaxListeners(20);

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send("WELCOME TO SUNOO MUSIC APP");
});

app.use("/api/songs/", songsRouter);
app.use("/api/users/", userRouter);
app.use("/api/artistes/", artisteRouter);
app.use("/api/playlists/", playlistRouter);

const port = process.env.PORT || 3000;
app.listen(port, "0.0.0.0", () => {
  console.log(`SERVER RUNNING ON PORT ${port}`);
});
