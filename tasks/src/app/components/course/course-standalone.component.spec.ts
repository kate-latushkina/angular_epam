import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ICourse } from '../../interfaces/course';
import { Course } from '../../classes/course';
import { HttpClientModule } from '@angular/common/http';

import { CourseComponent } from './course.component';
import { TimePipe } from '../../pipes/list-time.pipe';

const item: ICourse = new Course({
  id: 0,
  name: 'Test title',
  date: new Date(),
  length: 10,
  description: 'Test description',
  authors: {id: 0, name: 'Test', lastName: 'Test'},
  isTopRated: false
});

describe('CourseComponent', () => {
  let component: CourseComponent;
  let fixture: ComponentFixture<CourseComponent>;

  beforeEach((() => {
    TestBed.configureTestingModule({
      declarations: [ CourseComponent, TimePipe ],
      imports: [HttpClientModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseComponent);
    component = fixture.componentInstance;
    component.item = item;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});