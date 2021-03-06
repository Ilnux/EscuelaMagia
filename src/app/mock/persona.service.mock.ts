import {of} from "rxjs";
import {Persona} from "../interfaces/Persona.interface";

export class PersonaServiceMock {
  personas: Persona[] = [
    {
      name: "Harry Potter",
      species: "human",
      gender: "male",
      house: "Gryffindor",
      dateOfBirth: "31-07-1980",
      yearOfBirth: 1980,
      ancestry: "half-blood",
      eyeColour: "green",
      hairColour: "black",
      wand: {
        wood: "holly",
        core: "phoenix feather",
        length: 11
      },
      patronus: "stag",
      hogwartsStudent: true,
      hogwartsStaff: false,
      actor: "Daniel Radcliffe",
      alive: true,
      image: "http://hp-api.herokuapp.com/images/harry.jpg"
    },
    {
      name: "Cho Chang",
      species: "human",
      gender: "female",
      house: "Ravenclaw",
      dateOfBirth: "",
      yearOfBirth: 0,
      ancestry: "",
      eyeColour: "brown",
      hairColour: "black",
      wand: {
        wood: "",
        core: "",
        length: 0
      },
      patronus: "swan",
      hogwartsStudent: true,
      hogwartsStaff: false,
      actor: "Katie Leung",
      alive: true,
      image: "http://hp-api.herokuapp.com/images/cho.jpg"
    },
    {
      name: "Severus Snape",
      species: "human",
      gender: "male",
      house: "Slytherin",
      dateOfBirth: "09-01-1960",
      yearOfBirth: 1960,
      ancestry: "half-blood",
      eyeColour: "black",
      hairColour: "black",
      wand: {
        wood: "",
        core: "",
        length: 0
      },
      patronus: "doe",
      hogwartsStudent: false,
      hogwartsStaff: true,
      actor: "Alan Rickman",
      alive: false,
      image: "http://hp-api.herokuapp.com/images/snape.jpg"
    },
    {
      name: "Cedric Diggory",
      species: "human",
      gender: "male",
      house: "Hufflepuff",
      dateOfBirth: "",
      yearOfBirth: 1977,
      ancestry: "",
      eyeColour: "grey",
      hairColour: "brown",
      wand: {
        wood: "ash",
        core: "unicorn hair",
        length: 12.25
      },
      patronus: "",
      hogwartsStudent: true,
      hogwartsStaff: false,
      actor: "Robert Pattinson",
      alive: false,
      image: "http://hp-api.herokuapp.com/images/cedric.png"
    }
  ];

  listarPersonas = jasmine.createSpy('listarPersonas()')
    .and.callFake(() => of(this.personas));

}
