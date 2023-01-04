import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemplisserComponent } from './remplisser.component';

describe('RemplisserComponent', () => {
  let component: RemplisserComponent;
  let fixture: ComponentFixture<RemplisserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemplisserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemplisserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
