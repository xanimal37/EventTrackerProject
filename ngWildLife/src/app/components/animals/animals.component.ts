import { Component, OnInit } from '@angular/core';
import { Animal } from 'src/app/models/animal';
import { AnimalService } from 'src/app/services/animal.service';

@Component({
  selector: 'app-animals',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.css']
})
export class AnimalsComponent implements OnInit{

  animals : Animal[]=[];

  ngOnInit(): void {
    this.reload();
  }

  constructor(private animalService:AnimalService){}

  reload():void {
    this.animalService.index().subscribe(
      {
        next: (animals) => {
          this.animals = animals;
        },
        error: (problem) => {
          console.error('TodoListHttpComponent.loadTodos(): error retreiving todos:');
          console.error(problem);
        }
      }
    );
  }
}
