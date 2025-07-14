import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ProductosService } from '../../../services/productos.service';
import { Categoria, Marca, ProductoWithContent, Search, Sexo, Tipo } from '../../../interfaces/types';
import { CardproductoComponent } from "../../../components/cardproducto/cardproducto.component";
import { CategoriasService } from '../../../services/categorias.service';
import { MarcasService } from '../../../services/marcas.service';
import { TiposService } from '../../../services/tipos.service';

@Component({
  selector: 'app-catalogo',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, CardproductoComponent],
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {
  products: ProductoWithContent[] = [];
  searchParams: Search = { search: '' };
  showCategoryFilter = false;
  showSexFilter = false;
  showBrandFilter = false;
  showTypeFilter = false;

  categorias: Categoria[] = [];
  marcas: Marca[] = [];
  tipos: Tipo[] = [];
  sexos: Sexo[] = [
    { id: 1, nombre: 'Masculino', activo: 1},
    { id: 2, nombre: 'Femenino', activo: 1},
    { id: 3, nombre: 'Unisex', activo: 1},
  ];
  productosService = inject(ProductosService);
  categoriasService = inject(CategoriasService);
  marcasService = inject(MarcasService);
  tiposService = inject(TiposService);
  
  router = inject(Router);
  route = inject(ActivatedRoute);

  ngOnInit() {
    // 1. Leemos los queryParams al iniciar
    this.route.queryParams.subscribe(params => {
      // Solo tomamos las propiedades definidas en Search
      const { search, categoria_id, sexo_id, marca_id, tipo_id } = params;
      this.searchParams = {
        search: search || '',
        categoria_id: categoria_id ? +categoria_id : undefined,
        sexo_id:    sexo_id    ? +sexo_id    : undefined,
        marca_id:   marca_id   ? +marca_id   : undefined,
        tipo_id:    tipo_id    ? +tipo_id    : undefined,
      };
      // 2. Cargamos productos con esos parámetros
      this.loadProducts();
    });
    this.loadFilters();
  }

  loadProducts() {
    this.productosService.getProducts(this.searchParams)
      .subscribe((data) => this.products = data);
  }

  loadFilters() {
    this.categoriasService.getAllCategorias().subscribe((data) => this.categorias = data);
    this.marcasService.getAllMarcas().subscribe((data) => this.marcas = data);
    this.tiposService.getAllTipos().subscribe((data) => this.tipos = data);
  }

  applyFilters() {
    // Actualizamos URL y recargamos
    this.router.navigate([], {
      queryParams: this.searchParams,
      queryParamsHandling: 'merge'
    });
    // loadProducts se disparará por la suscripción a queryParams
  }

  updateFilter(key: keyof Search, value: number) {
    if (key !== 'search') {
      const currentValue = this.searchParams[key] as number | undefined;
      this.searchParams[key] = currentValue === value ? undefined : value;
      this.applyFilters();
    }
  }

  toggleCategoryFilter() {
    this.showCategoryFilter = !this.showCategoryFilter;
    //this.showSexFilter = this.showBrandFilter = this.showTypeFilter = false;
  }

  toggleSexFilter() {
    this.showSexFilter = !this.showSexFilter;
    //this.showCategoryFilter = this.showBrandFilter = this.showTypeFilter = false;
  }

  toggleBrandFilter() {
    this.showBrandFilter = !this.showBrandFilter;
    //this.showCategoryFilter = this.showSexFilter = this.showTypeFilter = false;
  }

  toggleTypeFilter() {
    this.showTypeFilter = !this.showTypeFilter;
    //this.showCategoryFilter = this.showSexFilter = this.showBrandFilter = false;
  }
  resetFilters() {
    this.searchParams = { search: '' };
    this.loadProducts();
  }
}
