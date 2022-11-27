import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Education, Experience, Name, BackImage, Title, Photo, About, Projects, Network, Skills } from '../Datas';

const httpOptions = {
  headers: new HttpHeaders({
    'content-type': 'application/json'
  })
}
@Injectable({
  providedIn: 'root'
})

export class PortfolioService {
  private apiUrl1 = 'http://localhost:5000/network';
  private apiUrl2_1 = 'http://localhost:5000/name/'; 
  private apiUrl2_2 = 'http://localhost:5000/backImage/'; 
  private apiUrl2_3 = 'http://localhost:5000/title/'; 
  private apiUrl2_4 = 'http://localhost:5000/photo/'; 
  private apiUrl2_5 = 'http://localhost:5000/about/'; 
  private apiUrl3 = 'http://localhost:5000/experience';
  private apiUrl4 = 'http://localhost:5000/education';
  private apiUrl5 = 'http://localhost:5000/skills';
  private apiUrl6 = 'http://localhost:5000/projects';

  constructor(private http:HttpClient) { }
  //Redes Sociales
  getNetworks():Observable<any> {
    return this.http.get(this.apiUrl1);
  }
  updateNetwork(red: Network): Observable<Network> {
    const urlred = `${this.apiUrl1}/${red.id}`
   return this.http.put<Network>( urlred, red.name);
  }
  //informacion Banner y Datos
  getBackImage():Observable<any> {
    return this.http.get(this.apiUrl2_2);
  }
  getName():Observable<any> {
    return this.http.get(this.apiUrl2_1);
  }
  getTitle():Observable<any> {
    return this.http.get(this.apiUrl2_3);
  }
  getPhoto():Observable<any> {
    return this.http.get(this.apiUrl2_4);
  }
  getAbout():Observable<any> {
    return this.http.get(this.apiUrl2_5);
  }
  updateBackImage(banner: BackImage): Observable<BackImage> {
      const urlin = `${this.apiUrl2_2}/${banner.id}`
   return this.http.put<BackImage>(urlin, banner);
  }
  updatePhoto(foto: Photo): Observable<Photo> {
    const urlin = `${this.apiUrl2_4}/${foto.id}`
    return this.http.put<Photo>(urlin, foto);
  }
  updateName(nombre: Name): Observable<Name> {
    const urlin = `${this.apiUrl2_1}/${nombre.id}`
    return this.http.put<Name>(urlin, nombre);
  }
  updateTitle(titulo: Title): Observable<Title> {
    const urlin = `${this.apiUrl2_3}/${titulo.id}`
    return this.http.put<Title>(urlin, titulo);
  }
  updateAbout(acerca: About): Observable<About> {
    const urlin = `${this.apiUrl2_5}/${acerca.id}`
    return this.http.put<About>(urlin, acerca);
  }
  //experiencia Laboral
  getExperience():Observable<any> {
    return this.http.get(this.apiUrl3);
  }
  addExperience(experiencia: Experience) {
    return this.http.post<Experience>(this.apiUrl3, experiencia, httpOptions);
  }
  deleteExperience(experiencia: Experience): Observable<Experience> {
    const urlex = `${this.apiUrl3}/${experiencia.id}`
    return this.http.delete<Education>(urlex);
  }
  updateExperience(experiencia: Experience): Observable<Experience> {
    const urlex = `${this.apiUrl3}/${experiencia.id}`
   return this.http.put<Education>( urlex, experiencia.name);
  }
  //educacion
  getEducation():Observable<any> {
    return this.http.get(this.apiUrl4);
  }
  addEducation(educacion: Education) {
    return this.http.post<Education>(this.apiUrl4, educacion, httpOptions);
  }
  deleteEducation(educacion: Education): Observable<Education> {
    const urle = `${this.apiUrl4}/${educacion.id}`
    return this.http.delete<Education>(urle);
  }
  updateEducation(educacion: Education): Observable<Education> {
     const urled = `${this.apiUrl4}/${educacion.id}`
    return this.http.put<Education>( urled, educacion.name);
  }
//Skills
  getSkills():Observable<any> {
    return this.http.get(this.apiUrl5);
  }
  addSkill(habilidad: Skills) {
    return this.http.post<Skills>(this.apiUrl5, habilidad, httpOptions);
  }
  deleteSkill(habilidad: Skills): Observable<Skills> {
    const urlh = `${this.apiUrl5}/${habilidad.id}`
    return this.http.delete<Skills>(urlh);
  }
  updateSkill(habilidad: Skills): Observable<Skills> {
   const urlh = `${this.apiUrl5}/${habilidad.id}`
  return this.http.put<Skills>( urlh, habilidad.name);
  }
  //Proyectos  
  getProjects():Observable<any> {
    return this.http.get(this.apiUrl6);
  }
  addProject(proyecto: Projects) {
    return this.http.post<Projects>(this.apiUrl6, proyecto, httpOptions);
  }
  deleteProject(proyecto: Projects): Observable<Projects> {
    const urlp = `${this.apiUrl6}/${proyecto.id}`
    return this.http.delete<Projects>(urlp);
  }
  updateProject(proyecto: Projects): Observable<Projects> {
     const urlp = `${this.apiUrl6}/${proyecto.id}`
    return this.http.put<Projects>( urlp, proyecto.name);
  }
}
