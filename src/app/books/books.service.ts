import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
@Injectable()

export class BooksService {

constructor() { }
//the service that returns the books array:
  getBooks() {
    return [
      {
        title: 'Book 1',
        author: 'Michel Mouhani',
        advice: 'Advice 1',
        imageUrl: 'https://picsum.photos/200/300',
        amount: 1000,
        content: ""
      },
      {
        title: 'Book 2',
        author: 'John Doe',
        advice: 'Advice 2',
        imageUrl: 'https://picsum.photos/200/300',
        amount: 2000,
        content: ""
      },
      {
        title: 'Book 3',
        author: 'Jane Doe',
        advice: 'Advice 3',
        imageUrl: 'https://picsum.photos/200/300',
        amount: 3000,
        content: ""
      },
      {
        title: 'Book 2',
        author: 'Michel Mouhani',
        advice: 'Advice 2',
        imageUrl: 'https://picsum.photos/500/600',
        amount : 4000,
        content: ""
      },
      {
        title: 'Book 3',
        author: 'Michel Mouhani',
        advice: 'Advice 3',
        imageUrl: 'https://picsum.photos/700/800',
        amount : 1000,
        content: ""
      },
      {
        title: 'Book 4',
        author: 'Michel Mouhani',
        advice: 'Advice 4',
        imageUrl: 'https://picsum.photos/10/80',
        amount : 1000,
        content: ""
      },
      {
        title: 'Book 5',
        author: 'Michel Mouhani',
        advice: 'Advice 5',
        imageUrl: 'https://picsum.photos/40/70',
        amount : 6000,
        content: ""
      },
      {
        title: 'Book 6',
        author: 'Michel Mouhani',
        advice: 'Advice 6',
        imageUrl: 'https://picsum.photos/34/21',
        amount : 500,
        content: ""
      },
    ];
  }
}
