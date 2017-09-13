import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs';

@Injectable()
export class InputService {

  private inputSubjects$ = new BehaviorSubject<string>('');

  constructor() { }

  changeInput(term){
    this.inputSubjects$.next(term);
  }

  getInput(): Observable <string> {
    return this.inputSubjects$.asObservable();
  }
}
