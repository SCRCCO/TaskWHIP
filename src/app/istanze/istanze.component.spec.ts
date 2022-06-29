import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IstanzeComponent } from './istanze.component';

describe('IstanzeComponent', () => {
  let component: IstanzeComponent;
  let fixture: ComponentFixture<IstanzeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IstanzeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IstanzeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
