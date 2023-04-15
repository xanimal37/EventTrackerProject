import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Animal } from '../models/animal';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {

  private baseUrl = 'http://localhost:8083/'; // adjust port to match server
  private url = this.baseUrl + 'api/animals'; // change 'todos' to your API path

  constructor(private http: HttpClient) { }

  index(): Observable<Animal[]> {
    return this.http.get<Animal[]>(this.url).pipe(
      catchError((err:any)=>{
        console.log(err);
        return throwError(
          ()=> new Error('AnimalService.index(): error retrieving animals: '+err)
        );
      })
    );
  };
}
