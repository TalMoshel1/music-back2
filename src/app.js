import express from "express";
import router from "./routes/index.js";
import connectToDb from "./db/connectToDb.js";
import cors from "cors";

const FE_RENDER = "https://music-trivia-1.onrender.com";
const app = express();
app.use(cors({ origin: process.env.FE_URL || FE_RENDER, credentials: true }));

app.use(express.json());
app.use(router);

const PORT = process.env.PORT || 3000;

connectToDb().then(() => {
  app.listen(PORT, () => console.log(`App listening at port ${PORT}`));
  console.log("cors wating for requests from: ", FE_RENDER);
});
