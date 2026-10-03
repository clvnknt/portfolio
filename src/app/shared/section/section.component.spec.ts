import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionComponent } from './section.component';

describe('SectionComponent', () => {
  let component: SectionComponent;
  let fixture: ComponentFixture<SectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SectionComponent]
    });
    fixture = TestBed.createComponent(SectionComponent);
    component = fixture.componentInstance;
    component.heading = 'Test';
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
