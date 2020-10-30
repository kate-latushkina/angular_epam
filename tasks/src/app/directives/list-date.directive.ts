import { AfterViewInit, Directive, ElementRef, Input } from '@angular/core';
import * as moment from 'moment';

@Directive({
    selector: '[dateOfCreate]'
})

export class DateDirective implements AfterViewInit {

    @Input() itemDate: string;
    constructor(public el: ElementRef) {
    }

    public ngAfterViewInit(): void {
        const itemValue = this.itemDate;
        const howManyDays = moment(itemValue).fromNow();
        const numDays = +howManyDays.split(' ')[0];
        if (numDays < 14 && numDays > 0) {
            this.el.nativeElement.style.border = '3px solid green'
        } else {
            this.el.nativeElement.style.border = '3px solid blue'
        }
    }
}