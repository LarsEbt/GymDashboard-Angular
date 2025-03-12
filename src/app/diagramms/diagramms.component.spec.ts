import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiagrammsComponent } from './diagramms.component';

describe('DiagrammsComponent', () => {
  let component: DiagrammsComponent;
  let fixture: ComponentFixture<DiagrammsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiagrammsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiagrammsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
