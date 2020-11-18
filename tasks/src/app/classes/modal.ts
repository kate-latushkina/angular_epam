import { ICourse } from '../interfaces/course';

export class Modal {
    public isOpen: boolean = false;
    public closeFn?: () => void;
    public course?: ICourse = { 
        id: null,
        name: '',
        date: new Date(),
        length: null,
        description: '', 
        authors: {
            id: null,
            name: '',
            lastName: ''
        },
        isTopRated: false
    };
}
