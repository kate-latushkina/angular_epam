import { IAuthor } from './author';

export interface ICourse {
    id: number;
    name: string;
    date: Date;
    length: number;
    description: string;
    authors: IAuthor;
    isTopRated: boolean;
}