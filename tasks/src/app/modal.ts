import { title } from 'process';
import { ICourse } from './interfaces/course';

export class Modal {
    public isOpen: boolean = false;
    public closeFn?: () => void;
    public course?: ICourse = { 
        id: null,
        title: '',
        createDate: new Date(),
        duration: null,
        description: '', 
    };
}
