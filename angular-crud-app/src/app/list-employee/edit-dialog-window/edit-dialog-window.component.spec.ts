import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDialogWindowComponent } from './edit-dialog-window.component';

describe('EditDialogWindowComponent', () => {
  let component: EditDialogWindowComponent;
  let fixture: ComponentFixture<EditDialogWindowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [EditDialogWindowComponent]
    });
    fixture = TestBed.createComponent(EditDialogWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
