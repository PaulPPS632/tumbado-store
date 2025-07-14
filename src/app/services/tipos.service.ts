import { inject, Injectable } from '@angular/core';
import { environment } from '../environments/environments';
import { HttpClient } from '@angular/common/http';
import { Tipo } from '../interfaces/types';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TiposService {
  http = inject(HttpClient);
  apiUrl: string = environment.apiUrl + `/tipos`;
  constructor() { }
  getAllTipos(): Observable<Tipo[]> {
    return this.http.get<Tipo[]>(this.apiUrl);
  }
}
