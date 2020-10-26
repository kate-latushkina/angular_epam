import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCourcesComponent } from './list-cources.component';

describe('ListCourcesComponent', () => {
  let component: ListCourcesComponent;
  let fixture: ComponentFixture<ListCourcesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListCourcesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
