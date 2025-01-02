import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardFolderComponent } from './card-folder.component';

describe('CardFolderComponent', () => {
  let component: CardFolderComponent;
  let fixture: ComponentFixture<CardFolderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardFolderComponent]
    });
    fixture = TestBed.createComponent(CardFolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
