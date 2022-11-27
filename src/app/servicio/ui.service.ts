import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UiService {

  private showAddProyecto: boolean = true;
  private subjet = new Subject<any>();// el puso subjet sin c

  constructor() { }

  toggleAddProyecto(): void {

    this.subjet.next(this.showAddProyecto);//aqui tambien
  }

  onToggleProyecto(): Observable<any> {
    return this.subjet.asObservable();
  }
  toggleAddTask(): void {

    this.subjet.next(this.showAddProyecto);//aqui tambien
  }



}
