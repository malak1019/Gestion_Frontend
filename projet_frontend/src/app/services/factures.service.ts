import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class FacturesService {

  private baseUrl = 'http://localhost:8092/api/factures'
  constructor(private http: HttpClient) { }



  getByIdFacture(clientId : number ):Observable<any[]>{
    return this.http.get<any[]>(`${this.baseUrl}/client/${clientId}`).pipe(
      catchError((error) => {
        return throwError('erreur se produite lors de recupuration de donnees');
      })
    );
  }
}
