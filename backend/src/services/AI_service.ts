import OpenAI from 'openai';
import { analyzeResultSchema } from '../schemas/analyze_schema';
import { AnalyzeResult } from '../types/analyze_types';

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});
const today = new Date().toISOString().split('T')[0];

export const analyzeTextWithAI = async (text: string): Promise<AnalyzeResult> => {
    try {
        const response = await openai.responses.create({
            model: 'gpt-5.4-nano-2026-03-17',
            input: [
                {role: 'system', content: `
                    You are an assistant that analyzes meeting notes.

                    Reference date: ${today}

                    Return a concise summary, actionable tasks, and future events.

                    Rules for summary:
                    - Summarize the main discussion points and decisions.
                    - Keep it concise.
                    - Focus on discussion topics, decisions, risks and conclusions.
                    - Do not list tasks.
                    - Do not repeat task assignments.
                    - Do not repeat event information.

                    Rules for tasks:
                    - Extract only actionable tasks that require someone to perform work.
                    - Do not include informational statements, decisions, reminders, or meetings as tasks.
                    - Do not include deadlines inside task titles.
                    - Convert relative deadlines to absolute dates using the reference date.
                    - Deadline must be returned in YYYY-MM-DD format.
                    - If owner is not mentioned, use null.
                    - If deadline cannot be determined, use null.
                    - Task title must be short and action-oriented.
                    - Do not include deadlines in task titles.
                    - Do not include explanations in task titles.
                    - Keep task titles under 10 words if possible.

                    Task title guidelines:
                    - Use a concise action verb.
                    - Remove deadlines from titles.
                    - Remove explanatory details from titles.
                    - Keep titles short and readable.
                    - Examples:

                    GOOD:
                    - Prepare ER diagram
                    - Compare Azure and AWS
                    - Design audit logging
                    - Create project presentation

                    BAD:
                    - Prepare ER diagram and send it by Friday
                    - Add audit logging to the task list and propose a solution

                    Examples:
                    - "do pátku" -> nearest upcoming Friday from the reference date.
                    - "do středy" -> nearest upcoming Wednesday from the reference date.
                    - "do 25. června" -> convert to YYYY-MM-DD.

                    Only extract tasks that were explicitly assigned,
                    requested, agreed upon, or committed to by a person.

                    Do not infer future work items from discussion.
                    Do not create tasks from general plans or ideas.

                    Rules for events:
                    - Extract only future events that should be scheduled.
                    - Do not extract the meeting from which the notes were created.
                    - Extract each event only once.
                    - If date and time are mentioned, treat them as one event.
                    - Do not create duplicate events.
                    - Use the event title without adding extra explanations.

                    General rules:
                    - Return data that strictly follows the provided JSON schema.`
                },
                {role: 'user', content: text},
            ],
            text: {format: {
                type: 'json_schema',
                name: 'analyze_result',
                schema: analyzeResultSchema,
                strict: true,
            }},
        })
        
        const raw = response.output_text;
        if (!raw) {
            throw new Error("No output from AI");
        }
        const parsed = JSON.parse(raw);
        return parsed as AnalyzeResult;
    }
        catch (error) {        console.error("Error analyzing text with AI:", error);
        throw new Error("Failed to analyze text with AI");
    }    
}