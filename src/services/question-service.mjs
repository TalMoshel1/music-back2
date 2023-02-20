import { QuestionModel } from '../models/question.mjs';


export async function serviceCreateQuestion(question){
    try {
		const score = new QuestionModel({
			body: question.body,
            answers: question.answers,
            answerId: question.answerId
		})
        await score.save()
        return score;
	}
	catch(err) {
		throw new Error(err)
	}
}

export async function serviceGetQuestions() {
    const questions =  await QuestionModel.aggregate([{ $sample: { size: 10 } }, { $project: { answerId: 0 } }])
    return questions
}


export async function serviceGetUserQuestions(_idArr) {
    try {
      const questions = await QuestionModel.aggregate([
        { $match: { _id: { $in: _idArr } } },
        { $redact: {
          $cond: [
            { $eq: [ { $indexOfArray: [ _idArr, "$_id" ] }, -1 ] },
            "$$PRUNE",
            "$$KEEP"
          ]
        }},
        { $addFields: { sortIdx: { $indexOfArray: [ _idArr, "$_id" ] } } },
        { $sort: { sortIdx: 1 } }
      ]).exec();
      return questions;
    } catch (err) {
      throw new Error(err);
    }
  }




