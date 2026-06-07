import express from 'express';
import { analyze, getAnalysisById, getHistory } from '../controllers/analyze_controller';


const AnalyzeRouter = express.Router();

AnalyzeRouter.post('/', analyze);
AnalyzeRouter.get('/', getHistory);
AnalyzeRouter.get('/:id', getAnalysisById);

  

export default AnalyzeRouter;