import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowalbumsComponent } from './showalbums.component';

describe('ShowalbumsComponent', () => {
  let component: ShowalbumsComponent;
  let fixture: ComponentFixture<ShowalbumsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowalbumsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowalbumsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
