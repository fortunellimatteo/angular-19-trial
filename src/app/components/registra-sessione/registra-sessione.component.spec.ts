import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistraSessioneComponent } from './registra-sessione.component';

describe('RegistraSessioneComponent', () => {
  let component: RegistraSessioneComponent;
  let fixture: ComponentFixture<RegistraSessioneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistraSessioneComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistraSessioneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
