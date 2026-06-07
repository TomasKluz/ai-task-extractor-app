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
    summary: string;
    tasks: Task[];
    events: Event[];
}