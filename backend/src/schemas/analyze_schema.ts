export const analyzeResultSchema = {
    type: 'object',
    additionalProperties: false,
    required: ['summary', 'tasks', 'events', 'title', 'sourceType'],
    properties: {
        summary: {
            type: "string",
            description: "Short summary of the input text"
        },
        title: {
            type: "string",
            description: "Short title for the analysis"
        },
        sourceType: {
            type: "string",
            description: "Type of the source text"
        },
        tasks: {
            type: "array",
            description: "List of extracted tasks",
            items: {
                type: "object",
                additionalProperties: false,
                required: ['title', 'owner', 'deadline'],
                properties: {
                    title: {
                        type: "string",
                        description: "Task title"
                    },
                    owner: {
                        type: ["string", "null"],
                        description: "Person responsible for the task or null if unknown"
                    },
                    deadline: {
                        type: ["string", "null"],
                        description: "Task deadline in ISO format mentioned in text or null if unknown"
                    }
                }
            }
        },
        events: {
            type: "array",
            description: "List of extracted events",
            items: {
                type: "object",
                additionalProperties: false,
                required: ['title', 'date', 'time'],
                properties: {
                    title: {
                        type: "string",
                        description: "Event title"
                    },
                    date: {
                        type: "string",
                        format: "date",
                        description: "Event date in ISO format"
                    },
                    time: {
                        type: "string",
                        format: "time",
                        description: "Event time in ISO format"
                    }
                }
            }
        }
    }
} as const;