/* eslint-disable import/extensions */
/* eslint-disable no-console */
import express, { json, urlencoded } from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import empRoutes from "./routes/employees.js";
import userRoutes from "./routes/users.js";

const app = express();
dotenv.config();

app.use(json());
app.use(urlencoded({ extended: true }));
app.use(cors());

mongoose
  .connect(process.env.DB_CONNECT_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Successfully connected to the mongoDB");
  })
  .catch((err) => {
    console.log("Could not connect to the database. Exiting now...", err);
    process.exit();
  });

app.use("/api/user", userRoutes);
app.use("/api/emp", empRoutes);

app.route("/").get((req, res) => {
  res.send("<h1>Assignment 2 - 101334771</h1>");
});

app.listen(process.env.SERVER_PORT, () => {
  console.log(
    `Server is running at http://localhost:${process.env.SERVER_PORT}`
  );
});
