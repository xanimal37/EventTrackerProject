import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmittalsComponent } from './admittals.component';

describe('AdmittalsComponent', () => {
  let component: AdmittalsComponent;
  let fixture: ComponentFixture<AdmittalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmittalsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmittalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
