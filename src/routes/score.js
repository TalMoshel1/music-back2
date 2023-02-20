import { postScore, getBoard } from '../controllers/score-controller.js';
import express from 'express';

const router = express.Router()

router.post('/api/score', postScore) 
router.get('/api/score', getBoard) 

export default router