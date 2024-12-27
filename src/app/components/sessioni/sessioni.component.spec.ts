import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SessioniComponent } from './sessioni.component';

describe('SessioniComponent', () => {
  let component: SessioniComponent;
  let fixture: ComponentFixture<SessioniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SessioniComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SessioniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
