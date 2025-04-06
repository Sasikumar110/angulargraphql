import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReflectedcomponentComponent } from './reflectedcomponent.component';

describe('ReflectedcomponentComponent', () => {
  let component: ReflectedcomponentComponent;
  let fixture: ComponentFixture<ReflectedcomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReflectedcomponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReflectedcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
