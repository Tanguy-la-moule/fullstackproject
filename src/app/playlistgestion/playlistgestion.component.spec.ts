import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaylistgestionComponent } from './playlistgestion.component';

describe('PlaylistgestionComponent', () => {
  let component: PlaylistgestionComponent;
  let fixture: ComponentFixture<PlaylistgestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaylistgestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaylistgestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
