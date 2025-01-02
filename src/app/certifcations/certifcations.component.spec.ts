import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertifcationsComponent } from './certifcations.component';

describe('CertifcationsComponent', () => {
  let component: CertifcationsComponent;
  let fixture: ComponentFixture<CertifcationsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CertifcationsComponent]
    });
    fixture = TestBed.createComponent(CertifcationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
