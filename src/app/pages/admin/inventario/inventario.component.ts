import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductoWithContent, Search } from '../../../interfaces/types';
import { ProductosService } from '../../../services/productos.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-inventario',
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.css']
})
export class InventarioComponent {
  products: ProductoWithContent[] = [];
  filteredProducts: ProductoWithContent[] = [];
  searchTerm: string = '';
  searchParams: Search = {
    search: ''
  };

  constructor(private productosService: ProductosService) {}

  ngOnInit() {
    this.loadProducts();
  }

  loadProducts() {
    this.productosService.getProducts(this.searchParams).subscribe((data) => {
      this.products = data;
      this.filteredProducts = [...this.products];
    });
  }

  filterProducts() {
    this.filteredProducts = this.products.filter(product =>
      product.nombre.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      product.marca.nombre.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  deleteProduct(id: number) {
    if (confirm('¿Estás seguro de eliminar este producto?')) {
      // Call service to delete product
      /*
      this.productosService.deleteProduct(id).subscribe(() => {
        this.products = this.products.filter(p => p.id !== id);
        this.filterProducts();
      });
      */
    }
  }
}
