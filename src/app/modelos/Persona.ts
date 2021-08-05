export interface PersonaModel {
  name: string;
  species: string;
  gender: string;
  house: string;
  dateOfBirth: string;
  yearOfBirth: number;
  ancestry: string;
  eyeColour: string;
  hairColour: string;
  patronus: string;
  hogwartsStudent: boolean ;
  hogwartsStaff: boolean;
  actor: string;
  alive: boolean;
  image: string;
  wand: VaritaModel;

}

export interface VaritaModel {
  wood: string;
  core: string;
  length: number;

}
