import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowtitlesComponent } from './showtitles.component';

describe('ShowtitlesComponent', () => {
  let component: ShowtitlesComponent;
  let fixture: ComponentFixture<ShowtitlesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowtitlesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowtitlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
