export interface Task {
    title: string;
    owner: string | null;
    deadline: string | null;
}

export interface Event {
    title: string;
    date: string;
    description: string | null;
}

export interface Analysis {
    id: number;
    inputText: string;
    summary: string;
    tasks: Task[];
    events: Event[];
    createdAt: string;
}