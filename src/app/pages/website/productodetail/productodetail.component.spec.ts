import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductodetailComponent } from './productodetail.component';

describe('ProductodetailComponent', () => {
  let component: ProductodetailComponent;
  let fixture: ComponentFixture<ProductodetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductodetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductodetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
