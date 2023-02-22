import express from 'express';
import router from './routes/index.js';
import connectToDb from './db/connectToDb.js';
import cors from 'cors';
const app = express();
app.use(cors({
  origin: process.env.FE_URL || 'https://music-trivia-frontend.onrender.com/',
  credentials: true
}));
app.use(express.json());
app.use(router);
const PORT = process.env.PORT || 3000;
connectToDb().then(() => {
  app.listen(PORT, () => console.log(`App listening at port ${PORT}`));
});