export type Todo = {
    id: number;
    title: string;
    description: string;
    date: Date;
    status: 'todo' | 'in-progress' | 'completed';
};