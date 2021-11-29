import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InitialBoxComponent } from './initial-box.component';

describe('InitialBoxComponent', () => {
  let component: InitialBoxComponent;
  let fixture: ComponentFixture<InitialBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InitialBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InitialBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
