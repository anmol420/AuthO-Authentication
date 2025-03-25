import "./config/env.js";
import "./config/passport.js";

import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import passport from "passport";

import connectDB from "./config/database.js";
import route from "./routes/auth.js";

const app = express();

app.use(cors({ origin: process.env.FRONTEND_URL, credentials: true }));
app.use(express.json());
app.use(cookieParser());
app.use(passport.initialize());

app.use("/auth", route);

connectDB()
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log(`Server is running on port ${process.env.PORT}`);
        });
    })
    .catch((err) => {
        console.error(err);
    });