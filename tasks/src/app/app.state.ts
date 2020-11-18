import { ICourseState } from './state/models';
// import { IAuthState } from "./core/state/models";

export interface IAppState {
    course: ICourseState;
    // author: IAuthState;
}