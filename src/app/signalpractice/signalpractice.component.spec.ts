import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalpracticeComponent } from './signalpractice.component';

describe('SignalpracticeComponent', () => {
  let component: SignalpracticeComponent;
  let fixture: ComponentFixture<SignalpracticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalpracticeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignalpracticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
