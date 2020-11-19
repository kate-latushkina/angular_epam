import { ICourseState, IAuthState } from './state/models';

export interface IAppState {
    course: ICourseState;
    auth: IAuthState;
}