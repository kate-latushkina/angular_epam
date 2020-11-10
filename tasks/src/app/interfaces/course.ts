export interface ICourse {
    id: number;
    name: string;
    date: Date;
    length: number;
    description: string;
    authors: {
        id: number;
        name: string;
    };
    isTopRated: boolean;
}