import { Images } from "./MoviesInterface";

export interface CharacterData {
  data: CharacterDataI[];
}

export interface CharacterDataI {
  character: Character;
  role: string;
  favorites: number;
  voice_actors: VoiceActor[];
}

interface Character {
  mal_id: number;
  url: string;
  images: Images;
  name: string;
}

export interface VoiceActor {
  person: Person;
  language: string;
}

interface Person {
  mal_id: number;
  url: string;
  images: Images;
  name: string;
}

export interface SingleCharacter {
  data: SingleCharacterData;
}

export interface SingleCharacterData {
  mal_id: number;
  url: string;
  name: string;
  about: string;
  voices: VoiceActor[];
  images: Images;
}
