import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RunRatePage } from './run-rate.page';

describe('RunRatePage', () => {
  let component: RunRatePage;
  let fixture: ComponentFixture<RunRatePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RunRatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
