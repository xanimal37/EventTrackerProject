import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Species } from '../models/species';

@Injectable({
  providedIn: 'root'
})
export class SpeciesServiceService {

  private baseUrl = 'http://localhost:8083/'; // adjust port to match server
  private url = this.baseUrl + 'api/species'; // change 'todos' to your API path

  constructor(private http: HttpClient) { }

  index(): Observable<Species[]> {
    return this.http.get<Species[]>(this.url).pipe(
      catchError((err:any)=>{
        console.log(err);
        return throwError(
          ()=> new Error('SpeciesService.index(): error retrieving species: '+err)
        );
      })
    );
  };
}
