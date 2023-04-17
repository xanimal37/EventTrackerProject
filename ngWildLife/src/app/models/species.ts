import { ConservationStatus } from './conservation-status';
export class Species {
  id:number;
  name: string;
  imageURL: string;
  conservationStatus: ConservationStatus | null;

  constructor(
    id:number=0,
    name: string='',
    imageURL: string='',
    conservationStatus: ConservationStatus | null = null
  )
  {
    this.id=id;
    this.name = name;
    this.imageURL = imageURL;
    this.conservationStatus=conservationStatus;
  }
}
