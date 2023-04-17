import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Animal } from 'src/app/models/animal';
import { Species } from 'src/app/models/species';
import { AnimalService } from 'src/app/services/animal.service';
import { SpeciesServiceService } from 'src/app/services/species-service.service';

@Component({
  selector: 'app-animals',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.css']
})
export class AnimalsComponent implements OnInit{

  title='Animals';
  animals : Animal[]=[];
  //need this for editing/adding an animal
  species: Species[]=[];
  newAnimal: Animal = new Animal();
  newAnimalSpeciesId: number=0;
  selectedAnimal: Animal | null = null;
  editAnimal: Animal | null = null;

  constructor(
    private animalService:AnimalService,
    private speciesService:SpeciesServiceService,
    private route: ActivatedRoute,
    private router: Router){}

  ngOnInit(): void {
    let animalIdString = this.route.snapshot.paramMap.get('animalId');
    if (animalIdString) {
      // additional logic
      console.log('ngOnInit : todoId: ' + animalIdString);
      let animalId = parseInt(animalIdString);
      if(isNaN(animalId)){
        this.router.navigateByUrl('invalidId');
      }
      else {
        //show the todo with this id
        this.animalService.show(animalId).subscribe({
          next: (animal)=>{
            this.selectedAnimal=animal;
          },
          error:(fail)=>{
            this.router.navigateByUrl('notfound');
          }
        });
      }
    }
    this.loadAnimals();
    this.loadSpecies();
  }

   loadAnimals():void {
    this.animalService.index().subscribe(
      {
        next: (animals) => {
          this.animals = animals;
        },
        error: (problem) => {
          console.error('AnimalsListHttpComponent.reload(): error retreiving animals:');
          console.error(problem);
        }
      }
    );
  }

  loadSpecies():void {
    this.speciesService.index().subscribe(
      {
        next: (species) => {
          this.species = species;
          for(let s of species){
            console.log(s.conservationStatus?.status);
          }
        },
        error: (problem) => {
          console.error('AnimalsListHttpComponent.loadSpecies(): error retreiving species:');
          console.error(problem);
        }
      }
    );
  }

  updateAnimal(animal: Animal, selectThis: boolean=true){  //this is the animal that is being edited
    console.log(animal);
    this.animalService.update(animal).subscribe({
      next:(updatedAnimal)=>{
        //things we want to do on success
        this.editAnimal=null;
        if(selectThis){
        this.selectedAnimal=updatedAnimal;
      }
        this.loadAnimals();
      },
      error: (fail) => {
        console.error('Error updating todo.');
        console.error(fail);
      }
    });
  }

  addAnimal(animal: Animal, speciesId:number){
    this.animalService.create(animal,speciesId).subscribe({
      next: (createdAnimal)=>{
      //coming back from post method in controller
      //anything depending on asynchronous operations (needs server response)
      this.newAnimal=new Animal();
      this.loadAnimals();
      },
      error: (fail) => {
        console.error('Error creating animal.');
        console.error(fail);
      }
    });
    }

    releaseAnimal(){
      let dateTime = new Date();
      console.log(dateTime);
    }

  displayAnimals(){
    this.selectedAnimal=null;
    this.editAnimal=null;
  }

  setEditAnimal()
  {
    this.editAnimal=this.selectedAnimal;
  }

}
