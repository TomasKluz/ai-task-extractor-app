import { Request, Response } from 'express';
import { analyzeText, getHistoryService, getAnalysisByIdService} from '../services/analyze_service';
import { AnalyzeResult } from '../types/analyze_types';

export const analyze = async (req: Request, res: Response) => {

    const { text } = req.body;

    if (typeof text !== 'string') {
        return res.status(400).json({
            error: "Text must be a string"
        });
    }

    const trimmedText = text.trim();

    if (trimmedText.length === 0) {
        return res.status(400).json({
            error: "Text is required"
        });
    }

    if (trimmedText.length > 10000) {
        return res.status(400).json({
            error: "Text is too long."
        });
    }
   
    try {
    const result = await analyzeText(trimmedText);
    res.json(result);
    } catch (error) {
        console.error("Error in analyze controller:", error);
        res.status(500).json({
            error: "Failed to analyze text. Please try again later."
        });
    }
}

export const getHistory = async (req: Request, res: Response) => {
    try {
        const history = await getHistoryService();
        res.json(history);
    } catch (error) {
        console.error("Error in getHistory controller:", error);
        res.status(500).json({
            error: "Failed to retrieve analysis history. Please try again later."
        });
    }
};

export const getAnalysisById = async (req: Request, res: Response) => {
    const id = Number(req.params.id);

    if (isNaN(id)) {
        return res.status(400).json({
            error: "Invalid analysis ID"
        });
    }

    try {
        const analysis = await getAnalysisByIdService(id);
        if (!analysis) {
            return res.status(404).json({
                error: "Analysis not found"
            });
        }
        res.json(analysis);
    } catch (error) {
        console.error("Error in getAnalysisById controller:", error);
        res.status(500).json({
            error: "Failed to retrieve analysis. Please try again later."
        });
    }
};
