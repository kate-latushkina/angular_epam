import { ICourse } from './interfaces/course';

export class Modal {
    public isOpen: boolean = false;
    public closeFn?: () => void;
    public course?: ICourse;
}
