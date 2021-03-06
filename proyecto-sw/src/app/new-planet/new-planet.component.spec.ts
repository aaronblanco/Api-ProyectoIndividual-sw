import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPlanetComponent } from './new-planet.component';

describe('NewPlanetComponent', () => {
  let component: NewPlanetComponent;
  let fixture: ComponentFixture<NewPlanetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewPlanetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewPlanetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
