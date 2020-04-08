import { Book } from './model/Book';
import { Injectable, EventEmitter } from '@angular/core';

export interface DataServiceInterface {
  books: Array<Book>;
  bookAddedEvent: EventEmitter<Book>;
  bookDeletedEvent: EventEmitter<Book>;

  addBook(book: Book);
  deleteBook();
}

@Injectable({
  providedIn: 'root'
})

export class DataService implements DataServiceInterface {

  books: Array<Book>;

  bookAddedEvent = new EventEmitter<Book>();
  bookDeletedEvent = new EventEmitter<Book>();

  constructor() {
    this.books = new Array<Book>();
    const book1 = new Book();
    book1.title = 'First Book';
    book1.author = 'Matt';
    book1.price = 3.99;
    this.books.push(book1);

    const book2 = new Book();
    book2.title = 'Second Book';
    book2.author = 'James';
    book2.price = 5.99;
    this.books.push(book2);

    const book3 = new Book();
    book3.title = 'Third Book';
    book3.author = 'Laura';
    book3.price = 8.99;
    this.books.push(book3);
  }

  addBook(book: Book) {
    if (book.author === 'James') {
      this.bookAddedEvent.error('Books by james not allowed');
    } else {
      this.books.push(book);
      this.bookAddedEvent.emit(book);
    }
  }

  deleteBook() {
    if (this.books.length > 0) {
      const book = this.books.pop();
      this.bookDeletedEvent.emit(book);
    } else {
      this.bookDeletedEvent.error('There are no books lefto delete');
    }
  }


}
