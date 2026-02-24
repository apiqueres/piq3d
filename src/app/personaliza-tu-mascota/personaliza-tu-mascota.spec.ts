import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalizaTuMascota } from './personaliza-tu-mascota';

describe('PersonalizaTuMascota', () => {
  let component: PersonalizaTuMascota;
  let fixture: ComponentFixture<PersonalizaTuMascota>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonalizaTuMascota]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonalizaTuMascota);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
