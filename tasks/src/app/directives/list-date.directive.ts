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
        const isYearAgo = howManyDays.split(' ')[1]
        if (isYearAgo === 'year' || isYearAgo === 'years') {
            this.el.nativeElement.style.border = '1px solid black';
        } else {
            if (numDays < 14 && numDays > 0) {
                this.el.nativeElement.style.border = '3px solid green';
            } else if (!numDays) {
                this.el.nativeElement.style.border = '3px solid blue';
            } else {
                this.el.nativeElement.style.border = '1px solid black';
            }
        }
    }
}