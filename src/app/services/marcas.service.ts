import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../environments/environments';
import { Marca } from '../interfaces/types';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MarcasService {
  http = inject(HttpClient);
  apiUrl: string = environment.apiUrl + `/marcas`;
  constructor() { }
  getAllMarcas(): Observable<Marca[]> {
    return this.http.get<Marca[]>(this.apiUrl);
  }
}
