import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FileaddedComponent } from './fileadded.component';

describe('FileaddedComponent', () => {
  let component: FileaddedComponent;
  let fixture: ComponentFixture<FileaddedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FileaddedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FileaddedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
