import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MilestonComponent } from './mileston.component';

describe('MilestonComponent', () => {
  let component: MilestonComponent;
  let fixture: ComponentFixture<MilestonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MilestonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MilestonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
