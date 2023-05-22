import { Photo } from "./photo";

export interface Member {
  id: number;
  username: string;
  age: number;
  photoUrl: string;
  gender: string;
  lastActive: Date;
  dateOfBirth: Date;
  knownAs: string;
  created: string;
  introduction: string;
  lookingFor: string;
  interests: string;
  city: string;
  country: string;
  photos: Photo[];
}


