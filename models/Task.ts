export interface Task {
    id: string;
    name: string;
    description?: string;
    created: string;
    author_id: string;
    planTime: number;
    factTime?: number;
    status: string;
    deadline?: string;
    files?: any[];
    participants?: string[];
    section: string;
}
