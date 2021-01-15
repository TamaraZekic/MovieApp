import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditComonentComponent } from './edit-comonent.component';

describe('EditComonentComponent', () => {
  let component: EditComonentComponent;
  let fixture: ComponentFixture<EditComonentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditComonentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditComonentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
