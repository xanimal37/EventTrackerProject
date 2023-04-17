import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Animal } from '../models/animal';
import { Observable, catchError, throwError } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import {environment} from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {

  //observable variabes for updating status bar
  private animals$ = new BehaviorSubject<Animal[]>([]);
  allAnimals$ = this.animals$.asObservable();

  //private baseUrl = 'http://localhost:8083/'; // adjust port to match server
  //private url = this.baseUrl + 'api/animals'; // change 'todos' to your API path
  private url = environment.baseUrl+'api/animals';

  constructor(private http: HttpClient) { }

  setAnimals(animals: Animal[]) {
    this.animals$.next(animals);
  }

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

  releases(): Observable<Animal[]> {
    return this.http.get<Animal[]>(this.url+"/releases").pipe(
      catchError((err:any)=>{
        console.log(err);
        return throwError(
          ()=> new Error('AnimalService.releases(): error retrieving recent releases: '+err)
        );
      })
    );
  };

  admittals(): Observable<Animal[]> {
    return this.http.get<Animal[]>(this.url+"/arrivals").pipe(
      catchError((err:any)=>{
        console.log(err);
        return throwError(
          ()=> new Error('AnimalService.admittals(): error retrieving recent arrivals: '+err)
        );
      })
    );
  };

  show(id:number): Observable<Animal> {
    return this.http.get<Animal>(this.url+"/"+id).pipe(
      catchError((err:any)=>{
        console.log(err);
        return throwError(
          ()=> new Error('AnimalService.show(): error retrieving animal by id: '+err)
        );
      })
    );
  };

  update(animal: Animal):Observable<Animal> {
    return this.http.put<Animal>(this.url + "/" + animal.id, animal).pipe(
      catchError((err:any)=> {
        console.log(err);
        return throwError(
          ()=>new Error("AnimalService.update(): error updating animal: "+err)
        );
      })
    );
  };

  create(animal: Animal, speciesId: number): Observable<Animal> {
    return this.http.post<Animal>(environment.baseUrl+"api/species/"+speciesId+"/animals", animal).pipe(
      catchError((err:any)=>{
        console.log(err);
        return throwError(
          ()=>new Error('AnimalService.create(): error creating animal: '+err)
        );
      })
    );
    };
}
