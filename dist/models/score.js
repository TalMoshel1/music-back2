import mongoose from 'mongoose';
const ScoreSchema = new mongoose.Schema({
  name: {
    type: String
  },
  score: {
    type: Number,
    default: 0
  },
  timestamp: {
    type: Date
  }
});
export const ScoreModel = mongoose.model('User', ScoreSchema);