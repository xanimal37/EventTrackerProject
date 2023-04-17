import { Component, OnInit } from '@angular/core';
import { AnimalService } from './services/animal.service';
import { Animal } from './models/animal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'ngWildLife';
  animals:Animal[]=[];

  constructor(private animalService: AnimalService){

  }

  ngOnInit():void {
    this.loadAnimals();
  }

  loadAnimals():void {
    this.animalService.index().subscribe(
      {
        next: (animals) => {
          this.animals = animals;
          this.animalService.setAnimals(animals);
        },
        error: (problem) => {
          console.error('AnimalsListHttpComponent.reload(): error retreiving animals:');
          console.error(problem);
        }
      }
    );

  }
}
