import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Animal } from 'src/app/models/animal';
import { AnimalService } from 'src/app/services/animal.service';

@Component({
  selector: 'app-admittals',
  templateUrl: './admittals.component.html',
  styleUrls: ['./admittals.component.css']
})
export class AdmittalsComponent {

  animals: Animal[]=[];
  selected: Animal|null=null;

  constructor(private animalService: AnimalService,
    private route: ActivatedRoute,
    private router: Router){}

  ngOnInit():void{
    // let animalIdString = this.route.snapshot.paramMap.get('animalId');
    // if (animalIdString) {
    //   // additional logic
    //   console.log('ngOnInit : animalId: ' + animalIdString);
    //   let animalId = parseInt(animalIdString);
    //   if(isNaN(animalId)){
    //     this.router.navigateByUrl('invalidId');
    //   }
    //   else {
    //     //show the todo with this id
    //     this.animalService.show(animalId).subscribe({
    //       next: (animal)=>{
    //         this.selected=animal;
    //       },
    //       error:(fail)=>{
    //         this.router.navigateByUrl('notfound');
    //       }
    //     });
    //   }
    // }
    this.reload();
  }

  reload():void {
    this.animalService.admittals().subscribe(
      {
        next: (animals) => {
          this.animals = animals;
        },
        error: (problem) => {
          console.error('AdmittalsHttpComponent.loadTodos(): error retreiving recent admittals:');
          console.error(problem);
        }
      }
    );
  }


}
