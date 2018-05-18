import { Injectable } from '@angular/core';
import { HEROES } from './../mock-heros'; // <--- Our Hero List
import { Hero } from './../hero'; // <--- Our Hero Type
import { Observable, of } from 'rxjs';

@Injectable({
providedIn: 'root'
})
export class HeroService {
public getHeroes(): Observable<Hero[]> {
return of (HEROES);
}
}
