import { Injectable } from '@angular/core';
import { database } from 'src/assets/data/data';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }
  getdata()
  {
    return database;
  }
}
