import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../environments/environments';
import { Observable } from 'rxjs';
import { Producto, ProductoWithContent, Search } from '../interfaces/types';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  http = inject(HttpClient);
  apiUrl: string = environment.apiUrl + `/productos`;
  constructor() { }
  getProducts(search: Search): Observable<ProductoWithContent[]> {
    return this.http.post<ProductoWithContent[]>(`${this.apiUrl}/search`, search);
  }
  getbyCategoria(idCategoria: number):Observable<ProductoWithContent[]>{
    return this.http.get<ProductoWithContent[]>(`${this.apiUrl}/categoria/${idCategoria}`);
  }
  getbyId(id: number):Observable<ProductoWithContent>{
    return this.http.get<ProductoWithContent>(`${this.apiUrl}/${id}`);
  }
  createProduct(producto: Producto): Observable<Producto> {
    return this.http.post<Producto>(`${this.apiUrl}`, producto);
  }
}
