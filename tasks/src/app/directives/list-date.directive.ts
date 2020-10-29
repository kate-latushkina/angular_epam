import { Directive, ElementRef } from '@angular/core';

@Directive({
    selector: '[dateOfCreate]'
})

export class DateDirective {
    public today: number = Date.now();
    
    // .toLocaleDateString()
    constructor(el: ElementRef) {
        console.log(this.today)
    }
}