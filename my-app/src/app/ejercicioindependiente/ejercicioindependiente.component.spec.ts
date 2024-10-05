import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjercicioindependienteComponent } from './ejercicioindependiente.component';

describe('EjercicioindependienteComponent', () => {
  let component: EjercicioindependienteComponent;
  let fixture: ComponentFixture<EjercicioindependienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EjercicioindependienteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EjercicioindependienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
