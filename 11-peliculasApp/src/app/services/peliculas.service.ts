import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarteleraResponse } from '../interfaces/cartelera-response';

@Injectable({
  providedIn: 'root',
})
export class PeliculasService {
  constructor(private http: HttpClient) {}

  getCartelera(): Observable<CarteleraResponse> {
    return this.http.get<CarteleraResponse>(
      'https://api.themoviedb.org/3/movie/now_playing?api_key=493a1a5f0e354264ebb4121234ada717&language=es-ES&page=1'
    );
  }
}
