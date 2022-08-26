import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdEduComponent } from './upd-edu.component';

describe('UpdEduComponent', () => {
  let component: UpdEduComponent;
  let fixture: ComponentFixture<UpdEduComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdEduComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdEduComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
