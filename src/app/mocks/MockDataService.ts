import { DataServiceInterface } from './../data.service';
import { EventEmitter } from '@angular/core';
import { Book } from '../model/Book';

export class MockDataService implements DataServiceInterface {
    bookDeletedEvent = new EventEmitter<Book>();
    books = new Array<Book>();
    bookAddedEvent = new EventEmitter<Book>();

    addBook(book: Book) {
        this.bookAddedEvent.emit(book);
    }
    deleteBook() { }
}
