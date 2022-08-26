import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdTextoComponent } from './upd-texto.component';

describe('UpdTextoComponent', () => {
  let component: UpdTextoComponent;
  let fixture: ComponentFixture<UpdTextoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdTextoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdTextoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
