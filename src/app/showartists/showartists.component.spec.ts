import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowartistsComponent } from './showartists.component';

describe('ShowartistsComponent', () => {
  let component: ShowartistsComponent;
  let fixture: ComponentFixture<ShowartistsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowartistsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowartistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
