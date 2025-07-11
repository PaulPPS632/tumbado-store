import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../environments/environments';
import { Observable } from 'rxjs';
import { ProductoWithContent } from '../interfaces/types';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  http = inject(HttpClient);
  apiUrl: string = environment.apiUrl + `/productos`;
  constructor() { }
  getbyCategoria(idCategoria: number):Observable<ProductoWithContent[]>{
    return this.http.get<ProductoWithContent[]>(`${this.apiUrl}/categoria/${idCategoria}`);
  }
}
