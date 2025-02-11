import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config(); 
async function connectToDb() {
  try {
    const MONGODB_PASSWORD = process.env.MONGODB_PASSWORD; 

    if (!MONGODB_PASSWORD) {
      throw new Error("MONGODB_PASSWORD environment variable is not set.");
    }

    const connection = await mongoose.connect(
      `mongodb+srv://TalMoshel:${MONGODB_PASSWORD}@cluster0.oegjnmw.mongodb.net/?retryWrites=true&w=majority`
    );

    console.log('connected to DB!');
    return connection; 

  } catch (error) {
    console.error("Error connecting to database:", error); 
    throw error; 
  }
}

export default connectToDb;
