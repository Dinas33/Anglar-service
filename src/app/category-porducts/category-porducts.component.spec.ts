import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryPorductsComponent } from './category-porducts.component';

describe('CategoryPorductsComponent', () => {
  let component: CategoryPorductsComponent;
  let fixture: ComponentFixture<CategoryPorductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoryPorductsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoryPorductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
