import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MorseInputComponent } from './morse-input.component';

describe('MorseInputComponent', () => {
  let component: MorseInputComponent;
  let fixture: ComponentFixture<MorseInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MorseInputComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MorseInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
