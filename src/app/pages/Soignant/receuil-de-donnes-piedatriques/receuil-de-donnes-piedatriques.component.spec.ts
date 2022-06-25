import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceuilDeDonnesPiedatriquesComponent } from './receuil-de-donnes-piedatriques.component';

describe('ReceuilDeDonnesPiedatriquesComponent', () => {
  let component: ReceuilDeDonnesPiedatriquesComponent;
  let fixture: ComponentFixture<ReceuilDeDonnesPiedatriquesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReceuilDeDonnesPiedatriquesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReceuilDeDonnesPiedatriquesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
