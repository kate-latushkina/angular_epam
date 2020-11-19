import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ICourse } from '../../interfaces/course';
import { HttpClientModule } from '@angular/common/http';

import { CourseComponent } from './course.component';
import { TimePipe } from '../../pipes/list-time.pipe';
import { By } from '@angular/platform-browser';
import { Component } from '@angular/core';

const item: ICourse = {
  id: 0,
  name: 'Test title',
  date: new Date(),
  length: 10,
  description: 'Test description',
  authors: {id: 0, name: 'Test', lastName: 'Test'},
  isTopRated: false
};

@Component({
  selector: 'app-test-component',
  template: `
    <app-course
      [item]="item"
      (onDelete)="deleteCourse($event)"
    ></app-course>
  `,
  styleUrls: []
})

export class TestHostComponent {
  item: ICourse = item; 
  recieveData: number;
  deleteCourse(data) {
    this.recieveData = data;
  }
}

describe('Test CourseComponent', () => {
    let testHost: TestHostComponent;
    let fixture: ComponentFixture<TestHostComponent>;

    beforeEach((() => {
        TestBed.configureTestingModule({
        declarations: [ TestHostComponent, CourseComponent, TimePipe ],
        imports: [HttpClientModule]
        })
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TestHostComponent);
        testHost = fixture.componentInstance;
    });

    it('@Input works!', () => {
      testHost.item = item;
      fixture.detectChanges();
      const title = fixture.debugElement.query(By.css('h4')).nativeElement;
      expect(title.textContent).toBe("TEST TITLE");
   });

    it('@Output works!', () => {
        testHost.item = item;
        fixture.detectChanges();

        const button = fixture.debugElement.query(By.css('.delete'));
        button.triggerEventHandler('click', null);
        expect(testHost.recieveData).toEqual(item.id);
    });

});