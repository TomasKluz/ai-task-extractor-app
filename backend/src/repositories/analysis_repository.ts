import { PrismaClient } from "@prisma/client";
import { AnalyzeResult } from '../types/analyze_types';

const prisma = new PrismaClient();

export const saveAnalysis = async (result: AnalyzeResult, inputText: string) => {
    return prisma.analysis.create({
        data: {
            inputText,
            summary: result.summary,
            tasks: JSON.parse(JSON.stringify(result.tasks)),
            events: JSON.parse(JSON.stringify(result.events)),
        }
    });
}

export const getHistoryFromDB = async () => {
    return prisma.analysis.findMany({
        orderBy: {
            createdAt: 'desc'
        }
    });
}

export const getAnalysisByIdFromDB = async (id: number) => {
    return prisma.analysis.findUnique({
        where: { id }
    });
}


