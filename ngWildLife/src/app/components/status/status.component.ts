import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Animal } from 'src/app/models/animal';
import { AnimalService } from 'src/app/services/animal.service';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit{

  animals: Animal[] =[];
  currentAnimals: number=0;
  currentAnimalsHighLeadLevel: number =0;

  constructor(
    private animalService:AnimalService,
    private route: ActivatedRoute,
    private router: Router)
    {}


  ngOnInit(): void {
      this.animalService.allAnimals$.subscribe((value) => {
        this.animals = [...value];
        this.updateStats();
      });
    }


    updateStats(){
      this.currentAnimals=0;
      this.currentAnimalsHighLeadLevel=0;
      for(let a of this.animals){
        if(a.released==null){
          this.currentAnimals++;
        }
        if(a.bloodLead>1){
          this.currentAnimalsHighLeadLevel++;
        }
      }
    }



}
