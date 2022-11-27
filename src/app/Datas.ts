export interface Name {
  id?: number;
  name: string;
}
export interface BackImage {
  id?: number;
  backImage: string;
}
export interface Title {
  id?: number;
  title: string;
}
export interface Photo {
  id?: number;
  photo: string;
}
export interface About {
  id?: number;
  about: string;
}
export interface Network {
  id?: number;
  name: string; 
  logo: string;
}
export interface Experience {
  id?: number;
  image: string;
  name: string;
  title: string; 
  date: string;
  description: string;
}
export interface Education {
  id?: number;
  image: string;
  name: string;
  title: string; 
  date: string;
  description: string;
}
export interface Skills {
  id?: number;
  name: string;
  val: number;
}
export interface Projects { 
  id?: number;
  image: string;
  name: string;
  date: string;
  description: string;
  url: string;
}
