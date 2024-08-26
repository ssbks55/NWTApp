import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import networthData from '../assets/networth-data.json'; 

@Injectable({
  providedIn: 'root'
})
export class NetworthService {

  constructor() { }

  getNetworthData(): Observable<any[]> {
    return of(networthData); // `of` creates an observable from the data
  }
}
