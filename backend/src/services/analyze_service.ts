import { analyzeTextWithAI } from "./ai_service";
import { AnalyzeResult } from '../types/analyze_types';
import { saveAnalysis, getAnalysisByIdFromDB, getHistoryFromDB } from "../repositories/analysis_repository";


export const analyzeText = async (text: string): Promise<AnalyzeResult> => {
    const result = await analyzeTextWithAI(text);
    await saveAnalysis(result, text);
    

    return result;
};

export const getHistoryService = async () => {
    return getHistoryFromDB();
};

export const getAnalysisByIdService = async (id: number) => {
    return getAnalysisByIdFromDB(id);
};