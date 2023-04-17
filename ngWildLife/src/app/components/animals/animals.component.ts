import { ConservationStatus } from './../../models/conservation-status';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Animal } from 'src/app/models/animal';
import { Species } from 'src/app/models/species';
import { AnimalService } from 'src/app/services/animal.service';
import { SpeciesServiceService } from 'src/app/services/species-service.service';
import { DatePipe } from '@angular/common';
import { StatusComponent } from '../status/status.component';

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
  addingAnimal: boolean = false;

  constructor(
    private animalService:AnimalService,
    private speciesService:SpeciesServiceService,
    private route: ActivatedRoute,
    private datePipe: DatePipe,
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
          this.animalService.setAnimals(animals);
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
        console.error('Error updating animal.');
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
      this.addingAnimal=false;
      this.loadAnimals();
      },
      error: (fail) => {
        console.error('Error creating animal.');
        console.error(fail);
      }
    });
    }

    releaseAnimal(animal: Animal, selectThis: boolean=true){  //this is the animal that is being edited
      let dateString = (new Date()).toLocaleDateString('fr-CA');
		let timeString = (new Date()).toLocaleTimeString();
		timeString = timeString.slice(0, -3);
		if(timeString.length<8){
			timeString='0'+timeString;
		}
		let timestamp=dateString+'T'+timeString;
		console.log(timestamp);

    animal.released=timestamp;

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
          console.error('Error updating animal.');
          console.error(fail);
        }
      });
    }

  displayAnimals(){
    this.selectedAnimal=null;
    this.editAnimal=null;
  }

  setEditAnimal()
  {
    this.editAnimal=this.selectedAnimal;
  }

  //classes based on conservation status
  getClass(animal:Animal):string {
    let statusId:number | undefined = animal.species?.conservationStatus?.id;
    if(typeof statusId==='undefined'){
      return '';
    }
    else {
    if(statusId<3){
      return 'safe';
    }
    else if(statusId<6){
      return 'concerned';
    }
    else {
      return 'danger';
    }
  }
}

getLeadClass(animal:Animal):string {
  if(animal.bloodLead>10){
    return 'highLead';
  }
  else {
    return '';
  }
}
}
