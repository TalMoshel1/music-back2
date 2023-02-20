import { ScoreModel } from '../models/score.js';

export async function serviceCreateScore(obj){
    try {
        const now = new Date()
		const score = new ScoreModel({
			name: obj.name,
            score: obj.score,
            timestamp: now
		})
        await score.save()
        return score;
	}
	catch(err) {
		throw new Error(err)
	}
}

export async function serviceGetBoard() {
    const randomScores = await ScoreModel.find({}).sort({score: -1, timestamp: -1}).limit(10)
    return randomScores
}






