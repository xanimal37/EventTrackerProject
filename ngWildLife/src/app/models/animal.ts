import { Species } from './species';

export class Animal {
  id: number;
  nickname: string;
  tag: string;
  reason: string;
  note:string;
  bloodLead: number;
  species: Species | null;
  arrived: string;
  released: string;

  constructor(
    id: number=0,
    nickname:string='',
    tag:string='',
    reason: string='',
    note:string='',
    bloodLead: number = 0,
    species:Species | null =null,
    arrived:string='',
    released: string=''
    )
    {
    this.id=id;
    this.nickname=nickname;
    this.tag=tag;
    this.reason = reason;
    this.note=note;
    this.bloodLead = bloodLead;
    this.species=species;
    this.arrived=arrived;
    this.released=released;
  }
}
