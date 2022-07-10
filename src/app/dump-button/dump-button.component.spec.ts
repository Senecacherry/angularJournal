import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DumpButtonComponent } from './dump-button.component';

describe('DumpButtonComponent', () => {
  let component: DumpButtonComponent;
  let fixture: ComponentFixture<DumpButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DumpButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DumpButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
