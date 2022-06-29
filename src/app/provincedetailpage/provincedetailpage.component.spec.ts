import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PROVINCEDETAILPAGEComponent } from './provincedetailpage.component';

describe('PROVINCEDETAILPAGEComponent', () => {
  let component: PROVINCEDETAILPAGEComponent;
  let fixture: ComponentFixture<PROVINCEDETAILPAGEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PROVINCEDETAILPAGEComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PROVINCEDETAILPAGEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
