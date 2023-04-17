export class ConservationStatus {

  id: number;
  statusCode: string;
	status : string;
	description: string;

  constructor(
    id:number=0,
    statusCode: string='',
    status: string='',
    description: string=''
  )
  {
    this.id=id;
    this.statusCode = statusCode;
    this.status=status;
    this.description=description;
  }


}
