import { HttpErrorResponse } from "@angular/common/http";
import { IAuthor } from "../interfaces/author";
import { ICourse } from "../interfaces/course";

export interface ICourseState {
    courses: ICourse[];
    authors: IAuthor[];
    course: ICourse;
    error: HttpErrorResponse;
}