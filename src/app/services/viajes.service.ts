import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { api_url, DB_PASSWORD } from 'db_info';


@Injectable({
  providedIn: 'root'
})
export class ViajesService {

  constructor(
    private httpClient: HttpClient,
  ) { }

  //Método de getViajes para obtener los viajes segun su estado
  getViajes(estado: String): Observable<any> {
    const URL = `${api_url}/viaje?select=*&estado=eq.${estado}`;

    const headers = new HttpHeaders({
      'apikey': `${DB_PASSWORD}`,
    });
    return this.httpClient.get(URL, { headers }).pipe(
      catchError((error) => {
        console.error('Error:', error);
        return throwError('No se pudo acceder a la base de datos');
      })
    );
  }
  getDetalleViaje(id_viaje: string): Observable<any> {
    const URL = `${api_url}/detalle_viaje?select=*&viaje_id=eq.${id_viaje}`;

    const headers = new HttpHeaders({
      'apikey': `${DB_PASSWORD}`,
    });
    return this.httpClient.get(URL, { headers }).pipe(
      catchError((error) => {
        console.error('Error:', error);
        return throwError('No se pudo acceder a la base de datos');
      })
    );
  }
  postViaje(data: any): Observable<any> {
    const URL = `${api_url}/viaje`;
    const headers = new HttpHeaders({
      'apikey': `${DB_PASSWORD}`,
    });
    return this.httpClient.post(URL, data, { headers }).pipe(
      catchError((error) => {
        console.error('Error:', error);
        return throwError('No se pudo acceder a la base de datos');
      })
    );
  }
}
