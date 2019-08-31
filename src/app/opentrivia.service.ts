import { Injectable } from '@angular/core';
import { GET_CATEGORIES} from './mock-opentrivia';

@Injectable({
  providedIn: 'root'
})
export class OpentriviaService {

  getCategories() {
    return GET_CATEGORIES['trivia_categories'];
  }

  constructor() { }
}
