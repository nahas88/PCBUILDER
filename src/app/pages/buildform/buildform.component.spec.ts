import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildformComponent } from './buildform.component';

describe('BuildformComponent', () => {
  let component: BuildformComponent;
  let fixture: ComponentFixture<BuildformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuildformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuildformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
