import { Subscription } from 'rxjs';
import { DataService, DataServiceInterface } from './../data.service';
import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import { Book } from '../model/Book';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit, OnDestroy {

  pageName = 'Page 1';

  books: Array<Book>;

  numberOfBooksWrittenByMatt: number;

  subscription: Subscription;
  subscription2: Subscription;

  constructor(@Inject('DataServiceInterface') private dataService: DataServiceInterface) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.pageName = 'First Page';
    }, 5000);

    this.books = this.dataService.books;
    this.numberOfBooksWrittenByMatt = this.books.filter(it => it.author === 'Matt').length;

    this.subscription = this.dataService.bookAddedEvent.subscribe(
      (newBook) => {
        if (newBook.author === 'Matt') {
          this.numberOfBooksWrittenByMatt++;
          console.log('Added', newBook);
        }
      },
      (error) => {
        console.log('an error occurred, ', error);
      },
      () => {
        // a
      }
    );

    this.subscription2 = this.dataService.bookDeletedEvent.subscribe(
      (book) => {
        if (book.author === 'Matt') {
          this.numberOfBooksWrittenByMatt--;
          console.log('Deleted', book);
        }
      }
    );


  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.subscription2.unsubscribe();
  }

  onButtonClick() {
    alert('Hello - The date today is' + new Date());
  }

}
