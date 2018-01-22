import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilesreceivedComponent } from './filesreceived.component';

describe('FilesreceivedComponent', () => {
  let component: FilesreceivedComponent;
  let fixture: ComponentFixture<FilesreceivedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilesreceivedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilesreceivedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
