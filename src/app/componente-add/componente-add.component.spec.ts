import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteAddComponent } from './componente-add.component';

describe('ComponenteAddComponent', () => {
  let component: ComponenteAddComponent;
  let fixture: ComponentFixture<ComponenteAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponenteAddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponenteAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
