export interface Task {
    title: string;
    owner: string | null;
    deadline: string | null;
}

export interface Event {
    title: string;
    date: string;
    time?: string;
}

export interface AnalyzeResult {
    title: string;
    sourceType: "meeting" | "email" | "note" | "other";
    summary: string;
    tasks: Task[];
    events: Event[];
}