import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Species } from 'src/app/models/species';
import { SpeciesServiceService } from 'src/app/services/species-service.service';

@Component({
  selector: 'app-species',
  templateUrl: './species.component.html',
  styleUrls: ['./species.component.css']
})
export class SpeciesComponent implements OnInit{

  species: Species[]=[];

  constructor(
    private speciesService:SpeciesServiceService,
    private route: ActivatedRoute,
    private router: Router){}

  ngOnInit(): void {
    this.reload();
  }

  reload():void {
    this.speciesService.index().subscribe(
      {
        next: (species) => {
          this.species = species;
        },
        error: (problem) => {
          console.error('SpeciesHttpComponent.reload(): error retreiving species:');
          console.error(problem);
        }
      }
    );

  }

  //classes based on conservation status
  getClass(species:Species):string {
    let statusId:number | undefined = species.conservationStatus?.id;
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
}
