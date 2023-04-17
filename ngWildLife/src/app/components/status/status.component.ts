import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AnimalService } from 'src/app/services/animal.service';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent {



  constructor(private animalService:AnimalService,
    private route: ActivatedRoute,
    private router: Router)
    {}


}
