import { Species } from './species';

export class Animal {
  nickname: string;
  tag: string;
  reason: string;
  bloodLead: number;
  species: Species | null;

  constructor(
    nickname:string='',
    tag:string='',
    reason: string='',
    bloodLead: number = 0,
    species:Species | null =null
    )
    {
    this.nickname=nickname;
    this.tag=tag;
    this.reason = reason;
    this.bloodLead = bloodLead;
    this.species=species;
  }
}
