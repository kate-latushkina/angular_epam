import { Pipe, PipeTransform } from '@angular/core';
import {ICourse} from '../interfaces/course';

@Pipe({
  name: 'listFilter'
})
export class ListFilterPipe implements PipeTransform {

  transform(courses: ICourse[], value: string): ICourse[] {
    if (value) {
      const corsesCopy: ICourse[] = [...courses];
      const lowercasedVal: string = value.toLowerCase();
      return corsesCopy.filter((course: ICourse) => course.name.toLowerCase().includes(lowercasedVal))
    } else {
      return courses;
    }
  }
}
