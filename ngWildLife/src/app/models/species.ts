import { ConservationStatus } from './conservation-status';
export class Species {
  id:number;
  name: string;
  imageURL: string;
  scientificName: string;
  description: string;
  conservationStatus: ConservationStatus | null;

  constructor(
    id:number=0,
    name: string='',
    imageURL: string='',
    scientificName: string='',
    description :string='',
    conservationStatus: ConservationStatus | null = null
  )
  {
    this.id=id;
    this.name = name;
    this.scientificName=scientificName;
    this.description=description;
    this.imageURL = imageURL;
    this.conservationStatus=conservationStatus;
  }
}
