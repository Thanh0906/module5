import {Injectable} from '@angular/core';
import {IWord} from "../model/iWord";

 let i: number = 0;

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {

  constructor() {
  }

  words: IWord[] = [
    {
      id: 1,
      word: 'one',
      mean: 'một'
    },
    {
      id: 2,
      word: 'two',
      mean: 'hai'
    },
    {
      id: 3,
      word: 'three',
      mean: 'ba'
    },
    {
      id: 4,
      word: 'four',
      mean: 'bốn'
    },
    {
      id: 5,
      word: 'five',
      mean: 'năm'
    }
  ];

  getAll(): IWord[] {
    return this.words;
  }

  find(id: number) {
    return this.words.find(item => item.id === id);
  }


}
