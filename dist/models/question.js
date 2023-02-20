import mongoose from 'mongoose';
const QuestionSchema = new mongoose.Schema({
  body: {
    type: String,
    required: true,
    validate: value => {
      value.length > 0;
    }
  },
  answers: {
    type: [],
    required: true,
    validate: array => {
      array.length === 4;
    }
  },
  answerId: {
    type: Number,
    required: true
  }
});
export const QuestionModel = mongoose.model('Question', QuestionSchema);